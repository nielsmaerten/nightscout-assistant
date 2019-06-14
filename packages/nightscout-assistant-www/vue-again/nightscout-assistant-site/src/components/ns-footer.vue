<template>
  <footer class="mx-10 mt-10">
    <div class="columns">
      <div class="column">
        <p class="text-xs">
          <a
            href="https://www.reddit.com/r/diabetes/comments/b9zo2t/nightscout_for_google_homeassistant/?utm_source=share&utm_medium=web2x"
          >
            Help & FAQ</a
          >
          <br />
          <a href="https://github.com/nielsmaerten/nightscout-assistant/issues"
            >Bug reports; feature requests</a
          >
        </p>
      </div>
      <div class="column">
        <p class="text-xs has-text-right">
          <a id="tos" v-if="$store.state.user.isAuthenticated" href="terms.html"
            >Terms of Service and Privacy Policy <br
          /></a>
          Google Assistant is a trademark of Google Inc.
          <br />
          Not affiliated with
          <a href="http://www.nightscout.info/">the Nightscout Project</a>
          <br />
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ns-footer"
};
</script>

<style></style>
