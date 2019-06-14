<template>
  <section id="nightscout-settings" class="mt-8 mx-10">
    <form @submit="submit">
      <div class="columns">
        <!-- Nightscout url input -->
        <div class="column is-three-fifths">
          <label class="label">Your Nightscout site</label>
          <div class="control">
            <input
              class="input"
              type="text"
              id="nightscout-url"
              v-model="user.settings.nsUrl"
              placeholder="https://MY-NS-SITE.herokuapp.com"
            />
          </div>
        </div>

        <!-- Unit input -->
        <div class="column">
          <label class="label">Unit</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select id="nightscout-unit" v-model="user.settings.unit">
                <option value="mg/dl">mg/dl</option>
                <option value="mmol/l">mmol/l</option>
              </select>
            </div>
          </div>
        </div>

        <!-- API secret input -->
        <div class="column">
          <label class="label">
            API Secret
            <span class="text-xs has-text-grey-light">(optional)</span>
          </label>
          <div class="control">
            <input
              placeholder="(unchanged)"
              v-model="user.settings.apiSecret"
              @focus="showApiSecretInfo = true"
              class="input"
              type="password"
              id="nightscout-api-secret"
            />
          </div>
        </div>
      </div>

      <article class="message" v-show="showApiSecretInfo" id="api-secret-info">
        <div class="message-header">
          <p class="text-sm">Do I have to enter my API Secret ?</p>
          <button
            type="button"
            class="delete"
            aria-label="delete"
            @click="showApiSecretInfo = false"
          ></button>
        </div>
        <div class="message-body">
          <p class="text-sm">
            This is only needed if your Nightscout site is
            <a
              target="_blank"
              href="http://www.nightscout.info/wiki/welcome/website-features/0-9-features/authentication-roles"
            >
              read protected </a
            >. <br />(for example if
            <span class="is-family-code has-text-info">AUTH_DEFAULT_ROLES</span>
            is set to
            <span class="is-family-code has-text-info">denied</span>)
          </p>
        </div>
      </article>
      <button class="button is-primary" type="submit">Save</button>
      <button class="button is-secondary ml-3" @click="signOut">
        Sign out
      </button>
    </form>
    <p id="success" class="mt-4" v-show="saveSuccess">
      <strong>Done!</strong> Now try asking Google Assistant:
      <br />
      <em>Hey Google, talk to Nightscout Status</em>
    </p>
  </section>
</template>

<script>
export default {
  name: "ns-user-settings",
  data() {
    return {
      saveSuccess: false,
      showApiSecretInfo: false,
      user: {
        settings: {
          nsUrl: undefined,
          unit: undefined,
          apiSecret: undefined
        }
      }
    };
  },
  async mounted() {
    let snapshot = await firebase
      .firestore()
      .collection("users")
      .doc(this.$store.state.user.email)
      .get();
    if (snapshot.exists) {
      var data = snapshot.data();
      this.user.settings.nsUrl = data.nsUrl;
      this.user.settings.unit = data.unit;
      this.$store.commit("setUserSettings", this.user.settings);
    }
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          window.location.reload();
        });
    },
    submit(e) {
      e.preventDefault();
      let settings = {
        nsUrl: this.user.settings.nsUrl,
        unit: this.user.settings.unit
      };
      if (
        this.user.settings.apiSecret != null &&
        this.user.settings.apiSecret.length > 0
      ) {
        var secretHash = new jsSHA("SHA-1", "TEXT");
        secretHash.update(this.user.settings.apiSecret);
        settings.secretHash = secretHash.getHash("HEX");
      }

      firebase
        .firestore()
        .collection("users")
        .doc(this.$store.state.user.email)
        .set(settings, { merge: true })
        .then(() => {
          this.saveSuccess = true;
        });
    }
  }
};
</script>

<style></style>
