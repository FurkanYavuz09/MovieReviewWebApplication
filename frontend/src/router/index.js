import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import Movies from '../views/Movies.vue';

import Movie from '../views/Movie.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,
  },
  
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
