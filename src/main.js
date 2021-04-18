import Vue from "vue";
import { i18n } from "./i18n";
import { store } from "./store";
import { router } from "./routing";
import "./utils.js";

new Vue({
  i18n,
  store,
  router
}).$mount("#app");
