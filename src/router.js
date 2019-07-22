import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Terms from "./views/Terms.vue";
import store from "@/store";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/en/home"
    },
    {
      path: "/terms",
      redirect: "/en/terms"
    },
    {
      path: "/:lng",
      redirect: "/:lng/home"
    },
    {
      path: "/:lng/home",
      name: "home",
      component: Home
    },
    {
      path: "/:lng/terms",
      name: "terms",
      component: Terms
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (store.state.languages.active !== to.params.lng) {
    store.dispatch("changeLanguage", to.params.lng);
  }
  next();
});

export default router;
