import { createRouter, createWebHistory } from "vue-router";

import About from "../pages/About.vue";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
