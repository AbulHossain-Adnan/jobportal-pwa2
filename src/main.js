import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import { registerSW } from 'virtual:pwa-register';

registerSW({
  immediate: true,
  onNeedRefresh() {},
  onOfflineReady() {},
});



import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// Elementor-Plus 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// progressbar
import VueProgressBar from "@aacassandra/vue3-progressbar";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})






const options = {
  color: "#50d38a",
  failedColor: "#874b4b",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

// notification toastr
import Notifications from '@kyvg/vue3-notification'

createApp(App)
  .use(router)
  .use(store)
  .use(VueSweetalert2)
  .use(ElementPlus)
  .use(VueProgressBar, options)
  .use(Notifications)
  .use(vuetify)
  .mount("#app");


