const i18next = require("i18next").default;

module.exports.i18next = i18next;

module.exports.initLocale = async function() {
  await i18next.init({
    debug: false,
    interpolation: {
      defaultVariables: {
        homepageUrl: "http://git.io/nightscoutstatus"
      }
    },
    resources: require("./find-resources")
  });
};
