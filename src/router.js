// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import MoviePage from "./pages/MoviePage.vue";
import TVShowPage from "./pages/TVShowPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/movies/:id", component: MoviePage },
  { path: "/tvshows/:id", component: TVShowPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
