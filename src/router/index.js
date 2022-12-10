import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from "@/pages/main/MainView.vue";
import GraphView from "@/pages/graph/GraphView.vue";
import ProjectsView from "@/pages/projects/ProjectsView";
import VideosView from "@/pages/videos/VideosView";
import BooksView from "@/pages/books/BooksView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/graph/:node_name',
    name: 'graph',
    component: GraphView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/videos',
    name: 'videos',
    component: VideosView
  },
  {
    path: '/books',
    name: 'books',
    component: BooksView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
