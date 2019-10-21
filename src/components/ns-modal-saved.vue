<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close()"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Settings saved</p>
      </header>
      <section class="modal-card-body">
        <article
          class="message mt-2"
          :class="{
            'is-warning': siteStatus < 0,
            'is-success': siteStatus > 0
          }"
        >
          <div class="message-body" v-if="siteStatus === 0">
            Testing:
            <br />
            <em class="ml-4">{{ $store.state.user.nsUrl }}</em>

            <progress class="progress is-small is-dark mt-5" max="100"
              >15%</progress
            >
          </div>

          <div class="message-body" v-if="siteStatus < 0">
            Unable to get a glucose reading from:
            <br />
            <em class="ml-4">{{ $store.state.user.nsUrl }}</em>
            <br />
            {{ $t("index.settings.invalid-url") }}
          </div>

          <div class="message-header" v-if="siteStatus > 0">
            {{ $t("index.settings.done") }}
          </div>
          <div class="message-body" v-if="siteStatus > 0">
            {{ $t("index.settings.success-msg") }}
            <em>{{ $t("common.full-invocation") }}</em>
          </div>
        </article>

        <article
          class="message is-info mt-2"
          v-if="routinesSupported && siteStatus > 0"
        >
          <div class="message-header">
            {{ $t("index.settings.hint-header") }}
          </div>
          <div class="message-body">
            <i18next path="index.settings.hint">
              <a
                target="_blank"
                href="https://support.google.com/googlehome/answer/7029585?co=GENIE.Platform%3DAndroid&hl=en"
                >{{ $t("index.settings.hint-routines") }}</a
              >
              <br />
            </i18next>
          </div>
        </article>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="close">OK</button>
        <br />
      </footer>
    </div>
  </div>
</template>

<script>
const constants = require("@/constants");
export default {
  name: "ns-modal-saved",
  props: {
    nsUrl: {
      required: true
    }
  },
  computed: {
    routinesSupported() {
      return (
        constants.languages.supportingRoutines.indexOf(
          this.$i18n.i18next.language
        ) !== -1
      );
    }
  },
  data() {
    return {
      siteStatus: 0
    };
  },
  methods: {
    close() {
      document.getElementById("root").classList.remove("is-clipped");
      this.$emit("closed");
    }
  },
  mounted() {
    document.getElementById("root").classList.add("is-clipped");

    setTimeout(() => {
      this.siteStatus = -1;
    }, 2500);
  }
};
</script>
