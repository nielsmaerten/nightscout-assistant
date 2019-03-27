const fetch = require("node-fetch");
const admin = require("firebase-admin");
const r = require("url");
const moment = require("moment")
module.exports = async userEmail => {
  if (admin.apps.length === 0) {
    admin.initializeApp();
  }

  return new Promise(async (resolve, reject) => {
    // TODO: hash email so we don't have to store addresses in our db
    userEmail = userEmail.replace("@", "").replace(".", "");

    const snapshot = await admin
      .app()
      .database()
      .ref("users/" + userEmail + "/ns")
      .once("value");

    const nsUrl = snapshot.exists() ? snapshot.val().url : null;
    if (!nsUrl) {
      resolve(
        "Looks like you haven't linked your Nightscout site yet. " +
        "To continue, visit https://github.com/nielsmaerten/nightscout-assistant"
      );
    } else {
      fetch(nsUrl + "/api/v1/entries/current.json")
        .then(res => res.json())
        .then(json => {
          resolve(formatResponse(json[0]));
        })
        .catch(() => {
          resolve(
            "Sorry, I couldn't reach your Nightscout site. Check if you've entered the correct URL on https://github.com/nielsmaerten/nightscout-assistant"
          );
        });
    }
  });
};

function formatResponse(d) {
  const ago = moment(d.dateString).fromNow();
  let trend;
  switch (d.direction) {
    case "DoubleUp":
      trend = "rising fast"
      break;
    case "SingleUp":
      trend = "increasing"
      break;
    case "FortyFiveUp":
      trend = "increasing slowly"
      break;
    case "Flat":
      trend = "stable"
      break;
    case "FortyFiveDown":
      trend = "decreasing slowly"
      break;
    case "SingleDown":
      trend = "decreasing"
      break;
    case "DoubleDown":
      trend = "dropping fast"
      break;
    default:
      trend = "Unknown direction"
      break;
  }
  return `${d.sgv} and ${trend} as of ${ago}.`;
}
