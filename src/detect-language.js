module.exports = () => {
  // Look for the language in the url hash
  var lngIndex = window.location.hash.indexOf("lng");

  // If found set it, if not fall back to 'en'
  if (lngIndex !== -1) {
    return window.location.hash.substr(lngIndex + 4, 2);
  } else {
    return "en";
  }
};
