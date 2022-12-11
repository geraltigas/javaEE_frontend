import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NoteEdit from '../views/NoteEdit.vue'
import NoteDetail from '../views/NoteDetail.vue'
import MyPage from '../views/MyPage.vue'
import Test from '../views/Test.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/homeview',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/noteedit/:id',
    name: 'noteedit',
    component: NoteEdit
  },
  {
    path: '/notedetail',
    name: 'notedetail',
    component: NoteDetail
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
