export default [
  {
    path: "/login",
    name: "login",
    meta: { hideSideNav: true },
    component: () => import("../views/Login.vue"),
  },
];
