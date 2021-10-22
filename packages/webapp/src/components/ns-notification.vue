<template>
  <div>
    <div class="notification is-warning">
      Nightscout Status has been taken down. 🙁
      <a
        href="https://pages.glucocheck.app/nightscout-status"
        >More info here</a
      >.
      <br>
      English and Dutch users can switch to <a href="https://glucocheck.app">Gluco Check</a>. For other languages, please help us 
      <a href="https://pages.glucocheck.app/translations">translate</a>.
    </div>
    <!-- <div
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: "ns-notification",
  computed: {
    currentLanguage() {
      return this.$store.state.languages.available.find((v) => {
        return v.code === this.$store.state.languages.active;
      }).name;
    },
  },
};
</script>
