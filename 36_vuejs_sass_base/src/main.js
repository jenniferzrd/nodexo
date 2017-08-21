/*jshint esversion: 6 */

import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import "font-awesome/css/font-awesome.min.css";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history", // remove the # from the SPA's urls
    routes // same as routes: routes
});

export const eventBus = new Vue({
    methods: {
        // toggleNavigation(status) {
        //     this.$emit("navigationToggled", status);
        // }
        dispatchData(msg) {
          this.$emit("dataDispatched", "je suis un message de dataDispatched propagé par event bus @ main.js" + msg);
        }
    }
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
