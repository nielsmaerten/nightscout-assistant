<template>
  <div>
    <div class="notification is-warning">
      I am aware Nightscout Status is currently down. 🙁
      <a
        href="https://github.com/nielsmaerten/nightscout-assistant/discussions/118"
        >More info here</a
      >.
      <br>
      <a href="https://glucocheck.app">Gluco Check</a> is a possible alternative, though it is only available in English.
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
