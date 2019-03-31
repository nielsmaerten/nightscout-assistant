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

    const snapshot = await admin
      .app()
      .firestore()
      .collection("users")
      .doc(userEmail)
      .get();

    const nsUrl = snapshot.exists ? snapshot.data().nsUrl : null;
    if (!nsUrl) {
      resolve(
        "Looks like you haven't linked your Nightscout site yet. " +
        "To continue, visit http://tiny.cc/nightscoutstatus"
      );
    } else {
      fetch(nsUrl + "/api/v1/entries/current.json")
        .then(res => res.json())
        .then(json => {
          resolve(formatResponse(json[0]));
        })
        .catch(() => {
          resolve(
            "Sorry, I couldn't reach your Nightscout site. Check if you've entered the correct URL on http://tiny.cc/nightscoutstatus"
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