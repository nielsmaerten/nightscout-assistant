const ns = require("./nightscout");
const { i18next, initLocale } = require("./i18n");

initLocale().then(() => {
    ns.getNightscoutStatus({
    nsUrl: "https://my-nightscout.herokuapp.com",
}, "user@example.com", i18next.getFixedT("en"))
});

