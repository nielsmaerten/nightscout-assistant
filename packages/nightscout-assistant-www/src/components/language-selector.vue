<template>
  <div class="select is-small">
    <select v-model="selectedLanguage">
      <option
        v-for="lang in $store.state.languages.available"
        :key="lang.code"
        :value="lang.code"
        >{{ lang.name }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: "language-selector",
  data() {
    return {
      selectedLanguage: this.$store.state.languages.active
    };
  },
  watch: {
    selectedLanguage(newLanguage) {
      this.$store.dispatch("changeLanguage", newLanguage);
    }
  },
  methods: {}
};
</script>
