import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading/'
import error from './error/'
import scrollTop from './scrollTop/'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    loading,
    error,
    scrollTop
  }
})
