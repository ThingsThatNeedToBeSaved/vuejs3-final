import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import Store from "./store/store";
import router from "./router/index";
import "es6-promise/auto";

const store = createStore(Store);

const app = createApp(App);

app.use(store);

app.use(router);

app.mount("#app");
