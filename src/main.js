import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { auth } from "./firebase";

import "./styles/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(faTrash, faCheckCircle);

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }

  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
});
