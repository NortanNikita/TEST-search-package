import Vue from "vue";
import VueRouter from "vue-router";
import spa from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Spa",
    component: spa,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
