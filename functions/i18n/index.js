const i18next = require("i18next").default;

module.exports.i18next = i18next;

module.exports.initLocale = async function(locale) {
    await i18next.init({
        lng: locale,
        debug: true,
        interpolation: {
            defaultVariables: {
                homepageUrl: "http://git.io/nightscoutstatus"
            }
        },
        resources: require("./strings.js")
    })
}

