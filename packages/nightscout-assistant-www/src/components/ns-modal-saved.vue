<template>
  <div class="modal is-active">
    <div class="modal-background" @click="vw && close()"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ $t("index.settings.done") }}</p>
      </header>
      <section class="modal-card-body">
        <article class="message mt-2">
          <div class="message-body">
            {{ $t("index.settings.success-msg") }}
            <em>{{ $t("common.full-invocation") }}</em>
          </div>
        </article>

        <article class="message is-info mt-2" v-if="routinesSupported">
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

        <article class="message is-danger mt-2" v-if="!vw">
          <div class="message-header">{{$t("index.settings.modal.read-this")}}</div>
          <div class="message-body is-size-7">
            <strong>{{ $t("terms.health.disclaimer-short") }}</strong>
            <ol type="I" class="mt-3">
              <li v-html='$t("index.settings.modal.disclaimer.1")'></li>
              <li v-html='$t("index.settings.modal.disclaimer.2")'></li>
              <li v-html='$t("index.settings.modal.disclaimer.3")'></li>
            </ol>
          </div>
        </article>
      </section>
      <footer class="modal-card-foot">
        <button v-if="vw" class="button is-success" @click="close">OK</button>
        <button
          v-if="!vw"
          class="button is-success"
          @click="disableDisclaimer(true)"
        >
          {{ $t("index.settings.modal.disclaimer.disable") }}
        </button>
        <a v-if="!vw" class="is-small" @click="disableDisclaimer(false)">
          <small>{{ $t("index.settings.modal.disclaimer.enable") }}</small>
        </a>
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
    },
    vw() {
      debugger;
      return this.$store.state !== undefined
    }
  },
  methods: {
    close() {
      document.getElementById("root").classList.remove("is-clipped");
      this.$emit("closed");
    },
    disableDisclaimer(hasHeardHealthDisclaimer) {
      firebase
        .firestore()
        .collection("users")
        .doc(this.$store.state.user.email)
        .set({ hasHeardHealthDisclaimer }, { merge: true })
        .then(() => {
          this.close();
        });
    }
  },
  mounted() {
    document.getElementById("root").classList.add("is-clipped");
  }
};
</script>
