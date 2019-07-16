<template>
  <div class="mt-5 mx-10">
    <h1>{{ $t("index.header.title") }}</h1>
    <h2 class="mb-1">{{ $t("index.header.subtitle") }}</h2>
    <div class="has-text-right">
      <language-selector></language-selector>
    </div>
    <div
      v-if="comingSoon"
      class="is-offset-one-quarter column notification is-half"
    >
      <span class="has-text-weight-bold">Coming soon!</span>
      Support for
      <em>{{ currentLanguage }}</em> is under way.
      <br />
      <br />
      If you're fluent in English and {{ currentLanguage }}, we could use your
      help! <br />Reach out on
      <a href="https://github.com/nielsmaerten/nightscout-assistant/issues"
        >GitHub</a
      >
      or
      <a href="https://go.niels.me/nightscout-reddit">Reddit</a>
      if you'd like to help translating.
    </div>
  </div>
</template>

<script>
import LanguageSelector from "./language-selector";
const constants = require("@/constants.js");
export default {
  name: "ns-header",
  components: { LanguageSelector },
  computed: {
    currentLanguage() {
      return this.$store.state.languages.available.find(v => {
        return v.code === this.$store.state.languages.active;
      }).name;
    },
    comingSoon() {
      return (
        constants.languages.comingSoon.indexOf(
          this.$store.state.languages.active
        ) !== -1
      );
    }
  }
};
</script>
