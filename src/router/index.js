import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import testRoute from "./test";
import { getToken } from "@/utils/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...testRoute,
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { showSideNav: true },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/LoginView.vue"),
      meta: { showSideNav: true },
    },
    {
      path: "/testa",
      name: "testa",
      component: () => import("../views/Home.vue"),
      meta: { showSideNav: true },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
      meta: { showSideNav: true },
    },
  ],
});

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

export default router;
