import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import NotesView from "@/views/NotesView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/notes',
    name: 'notes',
    component: NotesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
