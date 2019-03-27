const fetch = require("node-fetch")
const admin = require('firebase-admin')
const r = require("url")
module.exports = async (userEmail) => {

  if (admin.apps.length === 0) {
    admin.initializeApp()
  }

  return new Promise(async (resolve, reject) => {
    // TODO: hash email so we don't have to store addresses in our db
    userEmail = userEmail.replace("@", "").replace(".", "")

    const snapshot = await admin.app()
      .database()
      .ref("users/" + userEmail + "/ns")
      .once("value");

    const nsUrl = snapshot.val().url
    if (!nsUrl) {
      resolve("Looks like you haven't linked your Nightscout site yet. " +
        "To continue, visit https://github.com/nielsmaerten/nightscout-assistant")
    } else {
      fetch(nsUrl + '/api/v1/entries/current.json')
        .then(res => res.json())
        .then(json => {
          resolve({
            glucose: json[0].sgv,
            trend: json[0].direction,
            timestamp: new Date()
          })
        });
    }
  });
}