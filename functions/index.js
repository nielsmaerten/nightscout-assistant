// @ts-check
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nightscout = require("./nightscout");
const { dialogflow, SignIn } = require("actions-on-google");
const { i18next, initLocale } = require("./i18n");
const config = functions.config().dialogflow || require("./config");
const productionNumber = 3;
const { performance } = require("perf_hooks");

// Build auth header
const usernameAndPassword = `${config.auth.user}:${config.auth.password}`;
const base64Auth = Buffer.from(usernameAndPassword, "ascii").toString("base64");
const authHeader = `Basic ${base64Auth}`;

// Set dialogflow client ID and verification
const app = dialogflow({
  clientId: config.clientid,
  verification: {
    headers: {
      authorization: authHeader
    }
  }
});

// Initialize localization module
const initializedLocale = initLocale();

// Ensure Firebase is initialized (only once)
if (admin.apps.length === 0) {
  admin.initializeApp();
}

app.intent("Glucose Status", async conv => {
  // Start a timer
  const tStart = performance.now();

  // Get translation function for this user's locale
  await initializedLocale;
  const t = i18next.getFixedT(conv.user.locale);

  // Does the user have an active account?
  if (conv.user.profile.token === undefined) {
    // No? Ask them to sign in first
    conv.ask(new SignIn(t("signIn.request")));
    return;
  }

  // Get user profile from db
  const userEmail = conv.user.email;
  const userProfile = await nightscout.getUserProfile(userEmail);

  // Get current glucose from Nightscout
  const nightscoutStatus = await nightscout.getNightscoutStatus(
    userProfile,
    userEmail,
    t
  );

  // Conversations using the latest API will always hear the disclaimer
  const headerVersion = +conv.headers["x-nsstatus-api-version"];
  const disclaimer = {
    sayAlways: headerVersion >= productionNumber,
    heardByUser: userProfile && userProfile.hasHeardHealthDisclaimer
  };

  // If the user should hear the disclaimer, set the variable
  if (disclaimer.sayAlways || !disclaimer.heardByUser) {
    disclaimer.text = t("signIn.healthDisclaimer");
  }

  // Speak the response and end the conversation
  conv.close(`
      <speak>
        ${nightscoutStatus.response}
        <break time="500ms"/>
        ${disclaimer.text || ""}
      </speak>
    `);

  // If disclaimer was said, mark it as such
  if (disclaimer.text && userProfile) {
    console.log("Marking health disclaimer said for", userEmail);
    userProfile.hasHeardHealthDisclaimer = true;
    await nightscout.updateUserProfile(userProfile, userEmail);
  }

  // Stop the timer
  const tStop = performance.now();
  const runtimeMilliseconds = Math.floor(tStop - tStart);
  const logEntry = {
    user: conv.user.email,
    runtimeMilliseconds,
    queryMilliseconds: nightscoutStatus.tQueryTime,
    locale: conv.user.locale,
    event: "query-completed"
  };
  console.log(logEntry);
});

app.intent("Sign In", async (conv, params, signIn) => {
  // Get translation function for this user's locale
  await initializedLocale;
  const t = i18next.getFixedT(conv.user.locale);

  // @ts-ignore
  // Quit if user didn't sign in
  if (signIn.status !== "OK") {
    conv.close();
    return;
  }

  // ASSISTANT SAYS: "Great, your new account is set up. You'll get a confirmation email soon."
  // Get user's profile form db
  const userEmail = conv.user.email;
  const userProfile = await nightscout.getUserProfile(userEmail);

  // Has the user already set up an account?
  if (!userProfile) {
    // No user profile yet, prompt user to visit site and set it up
    // ASSISTANT SAYS: "Before I can get your glucose, you'll need to give me the url to your ns site..."
    conv.close(`
      <speak>
        ${t("errors.noNsSite")}
        <break time="500ms"/>
        ${t("signIn.healthDisclaimer")}
      </speak>
  `);
  } else {
    // Returning user.
    conv.followup("Glucose Status");
  }
});

exports.glucoseStatus = functions.https.onRequest(app);
exports.validateUrl = functions
  .runWith({ timeoutSeconds: 20 })
  .https.onCall(require("./validate-url"));
