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
   
  },

  mutations: {
  },

  actions: {
  },

  modules: {
    list,
    color
  },
plugins:[createVuexPersisted()]

})
