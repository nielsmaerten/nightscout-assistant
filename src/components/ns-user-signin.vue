<template>
  <section id="authentication" class="container">
    <p class="has-text-centered mt-8">
      {{$t("index.settings.connect")}}
    </p>
    <div id="firebaseui-auth-container"></div>
  </section>
</template>

<script>
import store from "@/store";
import router from "@/router"
export default {
  name: "ns-user-settings",
  mounted: initializeFirebaseUI
};

function initializeFirebaseUI() {
  // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: "http://localhost:8080",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    tosUrl: showTos,
    privacyPolicyUrl: showTos
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui =
    firebaseui.auth.AuthUI.getInstance() ||
    new firebaseui.auth.AuthUI(firebase.auth());

  // The start method will wait until the DOM is loaded.
  ui.start("#firebaseui-auth-container", uiConfig);
}

function showTos() {
  router.push("/terms");
}
</script>

<style></style>
