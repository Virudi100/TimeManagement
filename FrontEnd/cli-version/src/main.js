import { createApp } from 'vue'
import App from './App.vue'
import router from './routers';
import ToggleButton from 'vue-js-toggle-button'



createApp(App)
    .use(router)
    .mount("#app");
