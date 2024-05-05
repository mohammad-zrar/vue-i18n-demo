import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "root",
      redirect: { name: "pageOne", params: { lang: "en" } },
    },
    {
      path: "/:lang",
      name: "langRoot",
      children: [
        {
          path: "page-one",
          name: "pageOne",
          component: () => import("../components/PageOne.vue"),
        },
        {
          path: "page-two",
          name: "pageTwo",
          component: () => import("../components/PageTwo.vue"),
        },
      ],
    },
  ],
});
