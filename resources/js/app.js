require('./bootstrap');
import { createApp } from 'vue';
import App from './components/App.vue'
import router from "./router";
import store from "./store";
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

// createApp(App).mount("#app")
const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueSweetalert2)
axios.defaults.withCredentials = true;
axios.defaults.baseURL="http://localhost:8000/"
app.mount('#app')
