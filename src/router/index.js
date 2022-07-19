import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/Resume",
    name: "Resume",
    component: () => import("../views/Resume.vue"),
  },
  {
    path: "/Projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/Testimonials",
    name: "Testimonials",
    component: () => import("../views/Testimonials.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
