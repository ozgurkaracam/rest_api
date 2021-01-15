require('./bootstrap');
import { createApp } from 'vue';
import App from './components/App.vue'
import router from "./router";
import store from "./store";

// createApp(App).mount("#app")
const app = createApp(App)
app.use(router)
app.use(store)
axios.defaults.withCredentials = true;
axios.defaults.baseURL="http://localhost:8000"
app.mount('#app')
