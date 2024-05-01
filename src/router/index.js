import Vue from "vue";
import VueRouter from "vue-router";
import UserPage from "../views/UserPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "user",
    component: UserPage,
  },
  {
    path: "/business",
    name: "business",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BusinessPage.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: '/',
  routes,
});

export default router;
