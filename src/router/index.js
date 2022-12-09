import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from "@/pages/main/MainView.vue";
import GraphView from "@/pages/graph/GraphView.vue";
import KnowledgeDetailView from "@/pages/knowledge/KnowledgeDetailView.vue";

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
    path : '/knowledge/:knowledge_name',
    name: 'knowledge',
    component: KnowledgeDetailView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
