import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      style_page: {
        background: "rgba(255, 254, 251, 0.8)",
      },
    },
  },
  {
    path: "/element-group",
    name: "Element Group",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      style_page: {
        background: "#E5E5E5",
      },
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ElementGroup.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
