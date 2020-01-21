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
      de: require("./locales/de.json"),
      en: require("./locales/en.json"),
      es: require("./locales/es.json"),
      fr: require("./locales/fr.json"),
      hi: require("./locales/hi.json"),
      id: require("./locales/id.json"),
      it: require("./locales/it.json"),
      ja: require("./locales/ja.json"),
      ko: require("./locales/ko.json"),
      nl: require("./locales/nl.json"),
      no: require("./locales/no.json"),
      pl: require("./locales/pl.json"),
      pt: require("./locales/pt.json"),
      ru: require("./locales/ru.json"),
      sv: require("./locales/sv.json"),
      th: require("./locales/th.json"),
      uk: require("./locales/uk.json"),
      zh: require("./locales/zh.json")
    }
  });
};
