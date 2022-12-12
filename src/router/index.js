import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from "@/pages/main/HomePage.vue";
import GraphView from "@/pages/graph/GraphView.vue";
import ProjectsView from "@/pages/projects/ProjectsView";
import VideosView from "@/pages/videos/VideosView";
import BooksView from "@/pages/books/BooksView";
import Login from '../pages/user/Login.vue'
import Register from '../pages/user/Register.vue'
import KnowledgeDetailView from "@/pages/knowledge/KnowledgeDetailView.vue";
import KnowledgeListView from "@/pages/knowledge/KnowledgeListView.vue";
import Neo4jVisualization from "@/components/neo4j/Neo4jVisualization.vue";
import HomeView from "../pages/notes/HomeView.vue";
import NoteDetail from "../pages/notes/NoteDetail.vue"
import MyPage from "../pages/user/MyPage.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
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
  },
  {
    path: '/knowledge/:knowledge_name',
    name: 'knowledge',
    component: KnowledgeDetailView
  },
  {
    path:'/knowledges',
    name:'knowledges',
    component: KnowledgeListView
  },
  {
    path: '/gadmin',
    name: 'gadmin',
    component: Neo4jVisualization
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/homeview',
    name: 'home',
    component: HomeView
  },
  {
    path: '/notedetail/:id',
    name: 'notedetail',
    component: NoteDetail
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
