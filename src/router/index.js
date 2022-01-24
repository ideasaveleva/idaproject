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
    meta: {
      style_page: {
        background: "#E5E5E5",
      },
    },
    component: () => import("../views/ElementGroup.vue"),
  },
  {
    path: "/test",
    name: "Test",
    meta: {
      style_page: {
        background: "#E5E5E5",
      },
    },
    component: () => import("../views/Test.vue"),
    children: [
      {
        path: "user",
        name: "UserTest",
        component: () => import("../views/UserTest.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
