import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Toast } from 'mint-ui';
import axios from 'axios';

Vue.prototype.$http = axios;
Vue.use(Toast)
Vue.config.productionTip = false

Vue.use(ElementUI);

// 全局路由构造函数，判断是否登录和要跳转到页面
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.requireAuth)) {    // 需要登录
    if(window.localStorage.token && window.localStorage.isLogin === '1'){
      next()
    } else if (to.path !== '/login') {
      let token = window.localStorage.token;
      if (token === 'null' || token === '' || token === undefined){
          next({path: '/login'})
          Toast({ message: '检测到您还未登录,请登录后操作！', duration: 1500 })
      }
    } else {
      next()
    }
  } else {   // 不需要登录
    next()
    console.log("11111")
  }
})



// 配置公共url
axios.defaults.baseURL = "http://localhost:7092"
//添加请求拦截器
axios.interceptors.request.use(
  config =>{
    if(store.state.token){
      config.headers.common['token'] =store.state.token
    }
    return config;
  },
  error =>{
    //对请求错误做什么
    return Promise.reject(error);
  })

//http reponse响应拦截器
axios.interceptors.response.use(
  response =>{
    return response;
  },
  error=>{
    if(error.response){
      switch(error.response.status){
        case 401:
          localStorage.removeItem('token');
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
          })
      }
    }
  })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
