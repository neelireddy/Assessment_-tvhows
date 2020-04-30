import Vue from "vue";
import VueRouter from "vue-router";
import AllShows from "../components/allShows.vue";
Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "all-shows",
    component: AllShows
  },
  {
    path: "/details",
    name: "show-details",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/showDetails.vue")
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
