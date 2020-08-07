import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import VueClipboards from "vue-clipboards";

Vue.use(BootstrapVue);
Vue.use(VueClipboards);
Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
