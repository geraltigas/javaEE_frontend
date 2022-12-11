import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from "@/pages/main/MainView.vue";
import GraphView from "@/pages/graph/GraphView.vue";
import KnowledgeListView from "@/pages/knowledge/KnowledgeListView.vue";
import Neo4jVisualization from "@/components/neo4j/Neo4jVisualization.vue";

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
    path:'/knowledges',
    name:'knowledges',
    component: KnowledgeListView
  },
  {
    path: '/gadmin',
    name: 'gadmin',
    component: Neo4jVisualization
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
