import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import color from './modules/color'
import createVuexPersisted from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },

  getters: {
    list(state){
      return state.list.list
    }}
   
  },

  mutations: {
  },

  actions: {

  },

  modules: {
    list,
    color
  },
plugins:[createVuexPersisted(
 { reducer:{
  list:state.list,
  color:state.color
    
}}
)]

})
