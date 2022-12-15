import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
    activeMenu: 'index',
    useremail:"",
    userid:''
  },
  getters: {
    getEmail(state){
      return state.useremail
    },
    getUserid(state){
      return state.userid
    }
  },
  mutations: {
    email(state,email){
      state.useremail=email;
    },
    userid(state,id){
      state.userid = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
