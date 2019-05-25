// @ts-check
const functions = require("firebase-functions");
const nightscout = require("./nightscout");
const { dialogflow, SignIn } = require("actions-on-google");
const { i18next, initLocale } = require("./i18n");

const app = dialogflow({
  clientId:
    "348868123018-imkge00ovotkf89nq48hj0h00aesubuk.apps.googleusercontent.com"
});

app.intent("Glucose Status", async conv => {
  await initLocale(conv.user.locale);
  if (conv.user.profile.token === undefined) {
    conv.ask(new SignIn(i18next.t("signIn.request")));
  } else {
    const userEmail = conv.user.email;
    const nsResponse = await nightscout(userEmail);
    conv.close(nsResponse);
  }
});

app.intent("Sign In", async (conv, params, signin) => {
  await initLocale(conv.user.locale);
  if (signin.status === "OK") {
    conv.close(i18next.t("signIn.completed"));
  } else {
    conv.close();
  }
});

exports.glucoseStatus = functions.https.onRequest(app);
