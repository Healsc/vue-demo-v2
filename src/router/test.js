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
];
