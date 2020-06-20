<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close()"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{ $t("index.settings.settings-saved") }}
        </p>
      </header>
      <section class="modal-card-body">
        <article
          class="message mt-2"
          :class="{
            'is-warning': siteStatus < 0,
            'is-success': siteStatus > 0
          }"
        >
          <div class="message-header" v-if="siteStatus === 0">
            {{ $t("index.settings.one-moment-please") }}
          </div>
          <div class="message-body" v-if="siteStatus === 0">
            {{ $t("index.settings.testing-your-site") }}
            <progress
              class="progress is-small is-dark mt-5"
              max="100"
            ></progress>
          </div>

          <div class="message-header" v-if="siteStatus < 0">
            {{ $t("index.settings.oops") }}
          </div>
          <div class="message-body" v-if="siteStatus < 0">
            {{ $t("index.settings.unable-to-get-reading") }}
            <br />
            <em>{{ nsUrl }}</em>
            <div class="content">
              <ul>
                <li>{{ $t("index.settings.invalid-url") }}</li>
                <li>{{ $t("index.settings.use-token-url") }}</li>
              </ul>
            </div>
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
                v-bind:href="
                  `https://support.google.com/googlehome/answer/7029585?co=GENIE.Platform%3DAndroid&hl=${
                    this.$i18n.i18next.language
                  }`
                "
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

    // Now that settings have been saved, ask backend to validate them
    const validateUrl = firebase.functions().httpsCallable("validateUrl");

    validateUrl()
      .then(result => {
        this.siteStatus = result.data.ok ? 1 : -1;
      })
      .catch(error => {
        console.error("Network failure");
        console.error(error);
      });
  }
};
</script>
