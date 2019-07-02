---
name: New locale
about: Checklist for deploying the Action to a new locale
title: 'Add new locale: [LN-code]'
labels: enhancement
assignees: ''

---

## Translations
- [ ] New translations approved on Crowdin
- [ ] Translations merged into _master_ and _www_ branch
- [ ] If Routines are supported, locale code added to `lngsSupportingRoutines` array
- [ ] _www_ branch deployed to GitHub Pages
- [ ] Translator credit added to README / package.json

## Google Review requirements
- [ ] [Prepare for deployment - Google's Checklist](https://developers.google.com/actions/distribute/#prepare_for_deployment)

**Highlights:**
- [ ] Privacy policy fully translated
- [ ] Consistent Invocation and Display names
- [ ] Directory information up-to-date
- [ ] Testing instructions up-to-date

## Testing
- [ ] Invocation works in the new language
- [ ] Tested on real device in alpha
