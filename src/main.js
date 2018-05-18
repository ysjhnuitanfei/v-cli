import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
import App from './App'
import store from './store/'
import router from './router'
import VueLocalStorage from 'vue-localstorage'
import directives from './directive'
import { ToastPlugin, ConfirmPlugin, AlertPlugin } from 'vux'
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.use(VueLocalStorage)

// 将自定义指令注册到vue中
Object.keys(directives).forEach(key => {
  Vue.use(directives[key])
})

Vue.use(VueRouter)
Vue.use(VueFullpage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
FastClick.attach(document.body)
