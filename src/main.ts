import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import { i18n } from "./i18n";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(createPinia());

app.use(i18n);
app.use(router);
app.mount("#app");
