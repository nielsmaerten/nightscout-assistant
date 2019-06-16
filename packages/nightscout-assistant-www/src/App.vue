<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "@/store";
import detectLng from "./detect-language";

export default {
  created() {
    // Detect and set language
    store.dispatch("changeLanguage", detectLng());

    if (firebase.apps.length > 0) return;
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyArdp0nQPWy--mMYCNIuR5WfAiaJBylAOk",
      authDomain: "nightscout-974f6.firebaseapp.com",
      databaseURL: "https://nightscout-974f6.firebaseio.com",
      projectId: "nightscout-974f6",
      storageBucket: "nightscout-974f6.appspot.com",
      messagingSenderId: "348868123018"
    };

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        store.commit("setUser", user.email);

        // Enable Google Analytics
        if (!store.state.app.gaEnabled) {
          var gaScript = document.createElement("script");
          gaScript.src =
            "https://www.googletagmanager.com/gtag/js?id=UA-68993648-4";
          document.head.appendChild(gaScript);
          store.commit("enableGa");
        }
      }
    });
  }
};
</script>

<style lang="sass"></style>
