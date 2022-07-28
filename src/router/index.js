import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView";
import PostView from "@/views/PostView";
import SinglePostView from "@/views/SinglePostView";
import PageWithStore from "@/views/PageWithStore";


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
  {
    path: '/vue',
    component: PageWithStore
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
