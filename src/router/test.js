export default [
  {
    path: "/p1",
    name: "p1",
    meta: { showSideNav: true },
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/p2",
    name: "p2",
    meta: { showSideNav: true },
    component: () => import("../views/LoginView.vue"),
  },
];
