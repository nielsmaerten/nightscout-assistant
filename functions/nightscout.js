const fetch = require("node-fetch");
const admin = require("firebase-admin");
const moment = require("moment");
const URL = require("url").URL;

// Export a function that processes a user email into
// a response (string) that can be passed back to DialogFlow
module.exports = async userEmail => {
  //
  // Ensure Firebase is initialized (only once)
  if (admin.apps.length === 0) {
    admin.initializeApp();
  }

  // Return a promise that should always resolve.
  // Even if something goes wrong, we still need to tell the user why instead of just crashing.
  return new Promise(async resolve => {
    // TODO: hash email so we don't have to store addresses in our db

    // Grab the user document from Firebase
    const snapshot = await admin
      .app()
      .firestore()
      .collection("users")
      .doc(userEmail)
      .get();

    // Exit if no NS url has been provided yet
    const nsUrl = snapshot.exists ? snapshot.data().nsUrl : null;
    if (!nsUrl) {
      resolve(
        `Looks like you haven't linked your Nightscout site yet.
         To continue, visit http://git.io/nightscoutstatus`
      );
    } else {
      try {
        // Get settings
        const unit = snapshot.data().unit || "mg/dl";
        const apiSecret = snapshot.data().secretHash;

        // Build API request url
        const apiUrl = new URL(nsUrl);
        apiUrl.pathname = "/api/v1/entries/current.json";

        // Call the API
        const response = await fetch(apiUrl, {
          headers: {
            "API-SECRET": apiSecret
          }
        });

        // Exit if the request failed
        if (!response.ok) {
          throw new Error(
            `HTTP ${response.status}: ${response.statusText} - ${apiUrl}`
          );
        }

        // Parse JSON response
        const json = (await response.json())[0];

        // Validate dateString
        checkDateString(json.dateString, nsUrl, userEmail);

        // Format the response into a pronounceable answer
        resolve(formatResponse(json, unit));
        //
        //
      } catch (e) {
        resolve(handleError(e, userEmail, nsUrl));
      }
    }
  });
};

function formatResponse(d, unit) {
  const ago = moment(d.dateString).fromNow();
  const value = d.sgv || d.mbg;
  const bg = unit === "mg/dl" ? value : Math.round((value / 18) * 10) / 10;
  if (isNaN(bg)) {
    return "Hmmm. I could not find a recent glucose reading.";
  }
  let trend;
  switch (d.direction) {
    case "DoubleUp":
      trend = "rising fast";
      break;
    case "SingleUp":
      trend = "increasing";
      break;
    case "FortyFiveUp":
      trend = "increasing slowly";
      break;
    case "Flat":
      trend = "stable";
      break;
    case "FortyFiveDown":
      trend = "decreasing slowly";
      break;
    case "SingleDown":
      trend = "decreasing";
      break;
    case "DoubleDown":
      trend = "dropping fast";
      break;
    default:
      trend = null;
      break;
  }

  return trend === null
    ? `${bg} as of ${ago}.`
    : `${bg} and ${trend} as of ${ago}.`;
}

function handleError(error, userEmail, nsUrl) {
  let errorMsg = String(error.message || "");
  console.error("%s; User: %s; NightscoutUrl: %s", errorMsg, userEmail, nsUrl);
  console.error(error);

  // Invalid URL format
  if (errorMsg.startsWith("Invalid URL:")) {
    return `<speak>Sorry, the Nightscout URL you gave me doesn't appear to be valid. 
            Can you check on http://git.io/nightscoutstatus ?
            <break time="600ms"/>
            Make sure your url starts with http.</speak>`;
  }

  // Not found
  if (errorMsg.startsWith("HTTP 404:")) {
    return `Sorry, I couldn't find your Nightscout site. 
            Check if you've entered the correct URL on http://git.io/nightscoutstatus`;
  }

  // Unauthorized
  if (errorMsg.startsWith("HTTP 401:")) {
    return `Sorry, it looks like I don't have permission to access your Nightscout site.
            Try entering your API secret on http://git.io/nightscoutstatus`;
  }

  // NS site crashed
  if (errorMsg.startsWith("HTTP 5")) {
    return `Sorry, there seems to be a problem with your Nightscout site. 
            I wasn't able to get your status.`;
  }
}

/**
 * I occasionally see warnings from MomentJS
 * about improperly formatted dateStrings.
 * This method is just to help track these cases so
 * I can figure out what's causing it.
 */
function checkDateString(d, nsUrl, userEmail) {
  let regex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+/;
  if (!String(d).match(regex)) {
    let msg = `Improperly formatted timestamp: ${d}; Url: ${nsUrl}; User: ${userEmail}`;
    console.warn(msg);
  }
}
