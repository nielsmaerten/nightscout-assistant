const path = require("path");
const fs = require("fs");

const localePaths = {
  source: path.resolve("./strings"),
  cloudFunctions: path.resolve("../cloud-functions/i18n/locales"),
  webApp: path.resolve("../webapp/public/locales")
};

fs.symlinkSync(localePaths.source, localePaths.cloudFunctions, "junction");
fs.symlinkSync(localePaths.source, localePaths.webApp, "junction");
