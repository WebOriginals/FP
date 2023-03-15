import 'vue-select/dist/vue-select.css';
import "@/assets/scss/style.scss";
import { createApp } from 'vue';
import App from './App.vue';
import store from "@/store";


const app = createApp(App)

app
    .use(store)
    .mount('#app')
