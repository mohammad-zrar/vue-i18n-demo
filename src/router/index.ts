import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "page one" },
    },
    {
      path: "/page-one",
      name: "page one",
      component: () => import("../components/PageOne.vue"),
    },
    {
      path: "/page-two",
      name: "page two",
      component: () => import("../components/PageTwo.vue"),
    },
  ],
});
