import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { getToken } from "@/utils/auth";

import App from "./App.vue";
import router from "./router";
import { globalResignCom } from "../src/components/global-resign-com";

import "./assets/main.css";

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else if (to.name === "login") {
    next();
  } else {
    next("/login");
  }
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(globalResignCom);

app.mount("#app");
