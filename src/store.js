import Vue from "vue";
import Vuex from "vuex";
import i18next from "i18next";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    app: {
      gaEnabled: false
    },
    languages: {
      active: undefined,
      available: [
        { name: "English", code: "en" },
        { name: "Svenska", code: "sv" },
      //  { name: "Italiano", code: "it" }
      ],
      loaded: []
    },
    user: {
      settings: {
        nsUrl: undefined,
        unit: undefined,
        secretHash: undefined
      },
      isAuthenticated: false,
      email: undefined
    }
  },
  mutations: {
    setAuthStatus(state, isAuthenticated) {
      state.user.isAuthenticated = isAuthenticated;
    },
    setLanguage(state, language) {
      state.languages.active = language;
    },
    setUser(state, email) {
      state.user.email = email;
      state.user.isAuthenticated = true;
    },
    setUserSettings(state, data) {
      state.user.nsUrl = data.nsUrl;
      state.user.unit = data.unit;
    },
    enableGa(state) {
      state.app.gaEnabled = true;
    }
  },
  actions: {
    async changeLanguage(context, lng) {
      await i18next.changeLanguage(lng);
      context.commit("setLanguage", lng);
    }
  }
});

export default store;