import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from "../views/Search";
import voiture from "../components/voiture";
import Login from "../views/Login";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/voiture/:id',
    name: 'voiture',
    component: voiture
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
