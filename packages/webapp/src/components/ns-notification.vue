<template>
  <div>
    <div
      class="notification is-info"
      v-if="$store.state.languages.active === 'en'"
    >
      &nbsp;
      <strong>Gluco Check</strong> (<strong>Nightscout Status 2.0</strong>) is
      now available in English.
      <a href="https://glucocheck.app">Give it a try!</a>
      &nbsp;🎉
    </div>
    <div
      class="notification is-info"
      v-if="$store.state.languages.active !== 'en'"
    >
      &nbsp;
      <strong>Gluco Check (Nightscout Status 2.0)</strong>
      is now available in English. You can
      <a href="https://glucocheck.app">try it out here</a>, or help us
      <a href="https://translate.glucocheck.app">
        translate to {{ currentLanguage }} </a
      >.
    </div>
  </div>
</template>

<script>
export default {
  name: "ns-notification",
  computed: {
    currentLanguage() {
      return this.$store.state.languages.available.find(v => {
        return v.code === this.$store.state.languages.active;
      }).name;
    }
  }
};
</script>
