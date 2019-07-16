<template>
  <footer class="mx-10 mt-10">
    <div class="columns">
      <div class="column">
        <p class="text-xs">
          <a href="https://go.niels.me/nightscout-reddit">
            {{ $t("index.footer.help-faq") }}</a
          >
          <br />
          <a
            href="https://github.com/nielsmaerten/nightscout-assistant/issues"
            >{{ $t("index.footer.bugs") }}</a
          >
        </p>
      </div>
      <div class="column">
        <p class="text-xs has-text-right">
          <router-link :to="`/${$store.state.languages.active}/terms`">
            {{ $t("index.footer.tos") }}
          </router-link>
          <br />
          {{ $t("common.google-tm") }}
          <br />
          <i18next path="common.nightscout-no-affl">
            <a href="http://nightscout.info">
              {{ $t("common.nightscout-project") }}
            </a>
          </i18next>
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
