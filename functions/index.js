// @ts-check
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nightscout = require("./nightscout");
const { dialogflow, SignIn } = require("actions-on-google");
const { i18next, initLocale } = require("./i18n");
const config = functions.config().dialogflow || require("./config");

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
  // Get t function for this user's locale
  await initializedLocale;
  const t = i18next.getFixedT(conv.user.locale);

  // Check: does the user have an active account?
  if (conv.user.profile.token === undefined) {
    // NO: Ask them to sign in
    conv.ask(new SignIn(t("signIn.request")));
  } else {
    // YES:

    // Get user profile from db
    const userEmail = conv.user.email;
    const userProfile = await nightscout.getUserProfile(userEmail);

    // Get current glucose from Nightscout
    const nightscoutStatus = await nightscout.getNightscoutStatus(
      userProfile,
      userEmail,
      t
    );

    // Health Disclaimer: spoken on the first successful query
    let healthDisclaimer = null;
    if (nightscoutStatus.success && !userProfile.hasHeardHealthDisclaimer) {
      healthDisclaimer = t("signIn.healthDisclaimer");
    }

    // Speak the response and end the conversation
    conv.close(
      `<speak>
    ${nightscoutStatus.response}
    <break time="500ms"/>
    ${healthDisclaimer || ""}
    </speak>`
    );

    // Update the profile if we said the health disclaimer
    if (healthDisclaimer) {
      console.log("Marking health disclaimer said for", userEmail);
      userProfile.hasHeardHealthDisclaimer = true;
      await nightscout.updateUserProfile(userProfile, userEmail);
    }
  }
});

app.intent("Sign In", async (conv, params, signIn) => {
  // Get t function for this user's locale
  await initializedLocale;
  const t = i18next.getFixedT(conv.user.locale);

  // @ts-ignore
  // Quit if user didn't sign in
  if (signIn.status !== "OK") {
    conv.close();
  } else {
    // ASSISTANT SAYS: "Great, your new account is set up. You'll get a confirmation email soon."

    // Get user's profile form db
    const userEmail = conv.user.email;
    const userProfile = await nightscout.getUserProfile(userEmail);

    // Has the user already set up an account?
    if (!userProfile) {
      // No user profile yet, prompt user to visit site and set it up
      // ASSISTANT SAYS: "Before I can get your glucose, you'll need to give me the url to your ns site..."
      conv.close(t("errors.noNsSite"));
    } else {
      // 'Returning' user. Say health disclaimer again, and end conversation
      // by saying how to invoke it next time.
      conv.close(
        `<speak>
      ${t("signIn.healthDisclaimer")}
      <break time="500ms"/>
      ${t("signIn.completed")}
      </speak>`
      );
      userProfile.hasHeardHealthDisclaimer = true;
      await nightscout.updateUserProfile(userProfile, userEmail);
    }
  }
});

exports.glucoseStatus = functions.https.onRequest(app);
