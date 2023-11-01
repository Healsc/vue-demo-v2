export default [
  {
    path: "/p1",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/p2",
    name: "p2",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { hideSideNav: true },
    component: () => import("../views/Login.vue"),
  },
];
