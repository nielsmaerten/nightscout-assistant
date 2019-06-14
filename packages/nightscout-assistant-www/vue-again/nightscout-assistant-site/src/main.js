import Vue from "vue";
import i18next from "i18next";
import VueI18Next from "@panter/vue-i18next";
import XHR from 'i18next-xhr-backend';
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueI18Next);

i18next.use(XHR).init({
  fallbackLng: 'en',
  defaultNS: 'translation',
  backend: {
    loadPath: location.href.replace(/[^/]*$/, '') + "locales/{{lng}}.json"
  }
})
const i18n = new VueI18Next(i18next);

new Vue({
  router,
  store,
  i18n: i18n,
  render: h => h(App)
}).$mount("#app");
