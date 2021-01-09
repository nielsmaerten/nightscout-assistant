// @ts-check
const fetch = require("node-fetch");
const admin = require("firebase-admin");
const URL = require("url").URL;
const intl = require("intl");
const { performance } = require("perf_hooks");

// Gets the current glucose for a user,
// and returns it as a pronounceable response
const getNightscoutStatus = async (userProfile, userEmail, t) => {
  // Return a promise that should always resolve.
  // Even if something goes wrong, we still need to tell the user why instead of just crashing.
  return new Promise(async resolve => {
    // Exit if no NS url has been provided yet
    if (!userProfile || !userProfile.nsUrl) {
      resolve({
        response: t("errors.noNsSite"),
        success: false,
        error: "no-ns-site"
      });
      return;
    }

    const nsUrl = userProfile.nsUrl;
    try {
      // Get settings
      const unit = userProfile.unit || "mg/dl";
      const apiSecret = userProfile.secretHash;

      // Build API request url
      const apiUrl = new URL(nsUrl);
      apiUrl.pathname = "/api/v1/entries/current.json";

      // Call the API
      const tQueryStart = performance.now();
      // @ts-ignore
      let response = await fetch(apiUrl, {
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
      const tQueryTime = Math.floor(performance.now() - tQueryStart);

      // Exit if the request failed
      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}: ${response.statusText} - ${apiUrl}`
        );
      }

      // Parse JSON response
      const json = (await response.json())[0];

      // Format the response into a pronounceable answer
      const convResponse = formatResponse(json, unit, t);
      resolve({
        response: convResponse,
        success: true,
        tQueryTime,
        error: "none"
      });
    } catch (e) {
      const errorResponse = handleError(e, userEmail, nsUrl, t);
      resolve({ response: errorResponse, success: false, error: "api-error" });
    }
  });
};

const getUserProfile = async userEmail => {
  const snapshot = await admin
    .app()
    .firestore()
    .collection("users")
    .doc(userEmail)
    .get();

  return snapshot.data();
};

const updateUserProfile = async (userProfile, userEmail) => {
  await admin
    .app()
    .firestore()
    .collection("users")
    .doc(userEmail)
    .update(userProfile);
};

function formatResponse(d, unit, t) {
  // Init a localized version of moment
  let locale = determineLocale(t.lng);
  let moment = require("moment");
  moment.locale(locale);

  // Get localized numberFormat
  const nf = new intl.NumberFormat(locale).format;

  // Get components of the response
  const ago = moment(d.date).fromNow();
  const value = d.sgv || d.mbg;
  const bg = unit === "mg/dl" ? value : Math.round((value / 18) * 10) / 10;
  const trend = t("trends." + d.direction, { defaultValue: null });

  // Exit if no valid BG
  if (isNaN(bg)) {
    return t("errors.noBgReading");
  }

  // Formulate response
  if (trend) {
    return t("answers.withTrend", { bg: nf(bg), trend, ago });
  } else {
    return t("answers.noTrend", { bg: nf(bg), ago });
  }
}

function determineLocale(lnCode) {
  switch (lnCode) {
    // For Norwegian, fall back to Norwegian Bokmål
    case "no-NO":
      return "nb";

    default:
      return lnCode;
  }
}

function handleError(error, userEmail, nsUrl, t) {
  let errorMsg = String(error.message || "");
  console.log(
    `
    Error for user: %s
    Nightscout url: %s
    Error message : %s
    Error details : %s
  `,
    userEmail,
    nsUrl,
    errorMsg,
    error
  );

  // Invalid URL format
  if (errorMsg.startsWith("Invalid URL:")) {
    return `<speak>
      ${t("errors.invalidUrl.p1")}
      <break time="600ms"/>
      ${t("errors.invalidUrl.p2")}
      </speak>`;
  }

  // Not found
  if (
    errorMsg.startsWith("HTTP 404:") ||
    errorMsg.indexOf("ENOTFOUND") !== -1
  ) {
    return t("errors.notFound");
  }

  // Unauthorized
  if (errorMsg.startsWith("HTTP 401:")) {
    return t("errors.unauthorized");
  }

  // NS site crashed
  if (errorMsg.startsWith("HTTP 5")) {
    return t("errors.nsSiteError");
  }

  // Unknown error
  console.error("UNKNOWN ERROR:", error);
  return t("errors.unknown-error");
}

module.exports = {
  getNightscoutStatus,
  getUserProfile,
  updateUserProfile
};
