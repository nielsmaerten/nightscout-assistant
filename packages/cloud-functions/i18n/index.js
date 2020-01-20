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
    resources: {
      da: require("./locales/da.json"),
      fr: require("./locales/fr.json"),
      pl: require("./locales/pl.json"),
      pt: require("./locales/pt.json"),
      en: require("./locales/en.json"),
      sv: require("./locales/sv.json"),
      it: require("./locales/it.json"),
      nl: require("./locales/nl.json"),
      no: require("./locales/no.json"),
      de: require("./locales/de.json"),
      ja: require("./locales/ja.json"),
      es: require("./locales/es.json")
    }
  });
};
