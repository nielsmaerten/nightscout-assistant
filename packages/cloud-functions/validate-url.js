// @ts-check
const fetch = require("node-fetch").default;
const admin = require("firebase-admin");
const URL = require("url").URL;

/**
 * @param {any} param Not used. Parameters passed into the function from client.
 * @param {import("firebase-functions/lib/providers/https").CallableContext} context
 */
module.exports = async (param, context) => {
  // Fetch required info from internal db
  const snapshot = await admin
    .firestore()
    .doc(`users/${context.auth.token.email}`)
    .get();
  const data = snapshot.data();
  const apiSecret = data.secretHash;
  const nsUrl = data.nsUrl;

  let response;
  try {
    // Build API request url
    const apiUrl = new URL(nsUrl);
    apiUrl.pathname = "/api/v1/entries/current.json";

    // Call the API
    response = await fetch(apiUrl, {
      headers: {
        "API-SECRET": apiSecret
      }
    });

    // Nightscout v14.1.0 rejects incorrect apiSecrets, even when not read protected
    // Try again without the apiSecret if response came back unauthorized
    // https://github.com/nielsmaerten/nightscout-assistant/issues/114
    if (response.status === 401) {
      // @ts-ignore
      response = await fetch(apiUrl);
    }
  } catch (error) {
    return {
      ok: false,
      error: {
        type: "fetch",
        details: error
      }
    };
  }

  // Exit if the request failed
  if (!response.ok) {
    return {
      ok: false,
      error: {
        type: "site",
        status: response.status,
        statusText: response.statusText
      }
    };
  }

  // Parse response
  const json = (await response.json())[0];
  const noDate = !json.date;
  const noReading = !json.sgv && !json.mbg;

  // Check if all required fields exist
  if (noDate || noReading) {
    return {
      ok: false,
      error: {
        type: "noGlucoseReading",
        noDate,
        noReading
      }
    };
  }

  // If we got this far, everything works fine!
  return {
    ok: true,
    nsUrl
  };
};
