import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Toast } from 'mint-ui';
import axios from 'axios';
import 'mint-ui/lib/style.css'; 



import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
// 这是预览时引用的
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';
//预览的主题
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
//编辑器的主题
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
//注册
Vue.use(VMdPreview);
Vue.use(VueMarkdownEditor);




Vue.prototype.$http = axios;
Vue.use(Toast)
Vue.config.productionTip = false

Vue.use(ElementUI);

// 全局路由构造函数，判断是否登录和要跳转到页面
// router.beforeEach((to, from, next) => {
//   if(window.localStorage.token && window.localStorage.isLogin === '1'){ // 需要登录
//     next()
//   } else if (to.path !== '/login'&&to.path!=='/register') {
//     let token = window.localStorage.token;
//     if (token === 'null' || token === '' || token === undefined){
//         next({path: '/login'})
//         Toast({ message: '检测到您还未登录,请登录后操作！', duration: 1500 })
//     }
//   } else {
//     next()
//   }
// })



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
