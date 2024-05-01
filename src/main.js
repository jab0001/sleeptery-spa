import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/fontello/css/fontello.css";
import "@/assets/styles.css";
import VueLottie from "vue-lottie";
import VueFormulate from "@braid/vue-formulate";
import axios from "axios";
import VueAxios from "vue-axios";
import VueMask from "v-mask";

Vue.use(VueFormulate);

Vue.use(VueMask);

Vue.use(VueAxios, axios);

Vue.component("lottie", VueLottie);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
