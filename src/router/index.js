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
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/testa",
      name: "testa",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
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
