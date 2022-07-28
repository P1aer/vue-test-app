import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView";
import PostView from "@/views/PostView";
import SinglePostView from "@/views/SinglePostView";


const routes = [
  {
    path: '/',
    component: MainView
  },
  {
    path: '/posts',
    component: PostView
  },
  {
    path: '/post/:id',
    component: SinglePostView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
