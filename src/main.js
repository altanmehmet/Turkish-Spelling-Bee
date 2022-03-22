import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
var app = createApp(App)
  .use(router)
  .use(VueSweetalert2)
  .use(BalmUI, {
    // Optional. Overwrite `$toast` options.
    $toast: {
  position: 'center',
    }
  })
  .use(BalmUIPlus)
  
  app.mount('#app')