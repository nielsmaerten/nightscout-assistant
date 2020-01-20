const fs = require("fs");
const path = require("path");

let localesPath = "./locales"

/**
 * Scans the locales path, and returns them all as a resource object
 */
module.exports = () => {
    const resources = {};
    fs.readdirSync(path.resolve(localesPath)).forEach(f => {
        let fullLocalePath = path.resolve(path.join(localesPath, f));
        let locale = path.basename(f, ".json")
        resources[locale] = require(fullLocalePath);
    });
    return resources;
}