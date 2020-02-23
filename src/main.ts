import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Analytics from "./plugins/analytics";

Vue.config.productionTip = false;

Vue.use(Analytics);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
