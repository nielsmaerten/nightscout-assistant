const functions = require("firebase-functions");
const nightscout = require("./nightscout");
const { dialogflow, SignIn } = require("actions-on-google");

const app = dialogflow({
  clientId:
    "348868123018-imkge00ovotkf89nq48hj0h00aesubuk.apps.googleusercontent.com"
});

app.intent("Glucose Status", async conv => {
  if (conv.user.profile.token === undefined) {
    conv.ask(new SignIn("To access your glucose"));
  } else {
    const userEmail = conv.user.email;
    const nsResponse = await nightscout(userEmail);
    conv.close(nsResponse);
  }
});

app.intent("Sign In", (conv, params, signin) => {
  if (signin.status === "OK") {
    conv.close(
      "Now, you can try asking: 'Hey Google, ask Nightscout Status what my glucose is'"
    );
  } else {
    conv.close();
  }
});

exports.glucoseStatus = functions.https.onRequest(app);
