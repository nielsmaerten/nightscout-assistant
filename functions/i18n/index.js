const i18next = require("i18next").default;

module.exports.i18next = i18next;

module.exports.initLocale = async function () {
    await i18next.init({
        debug: false,
        interpolation: {
            defaultVariables: {
                homepageUrl: "http://git.io/nightscoutstatus"
            }
        },
        resources: {
            da: require("./languages/da.json"),
            fr: require("./languages/fr.json"),
            pl: require("./languages/pl.json"),
            en: require("./languages/en.json"),
            sv: require("./languages/sv.json"),
            it: require("./languages/it.json"),
            nl: require("./languages/nl.json"),
            de: require("./languages/de.json"),
            ja: require("./languages/ja.json"),
            es: require("./languages/es.json"),
        }
    })
}

