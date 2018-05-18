import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'

Vue.use(Router)

const Index = resolve => require(['../views/Index/Index'], resolve)

const ChangeBgColor = resolve => require(['../views/Demo/ChangeBgColor/Index'], resolve)
const BackFn = resolve => require(['../views/Demo/BackFn/Index'], resolve)
const Error = resolve => require(['../views/Demo/Error/Index'], resolve)
const UseWebp = resolve => require(['../views/Demo/UseWebp/Index'], resolve)
const Gap = resolve => require(['../views/Demo/Gap/Index'], resolve)
const GetData = resolve => require(['../views/Demo/GetData/Index'], resolve)
const ScrollPage = resolve => require(['../views/Demo/ScrollPage/Index'], resolve)
const CommonStyle = resolve => require(['../views/Demo/CommonStyle/Index'], resolve)
const Toppic = resolve => require(['../views/Toppic/Index'], resolve)
const Exclusive = resolve => require(['../views/Exclusive/Index'], resolve)
const Active = resolve => require(['../views/Active/Index'], resolve)
let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/commonStyle',
      name: 'CommonStyle',
      meta: {
        title: 'CommonStyle'
      },
      component: CommonStyle
    },
    {
      path: '/scrollPage',
      name: 'ScrollPage',
      meta: {
        title: 'ScrollPage'
      },
      component: ScrollPage
    },
    {
      path: '/getData',
      name: 'GetData',
      meta: {
        title: 'GetData'
      },
      component: GetData
    },
    {
      path: '/gap',
      name: 'Gap',
      meta: {
        title: 'Gap'
      },
      component: Gap
    },
    {
      path: '/useWebp',
      name: 'UseWebp',
      meta: {
        title: 'UseWebp'
      },
      component: UseWebp
    },
    {
      path: '/error',
      name: 'Error',
      meta: {
        title: 'Error'
      },
      component: Error
    },
    {
      path: '/backFn',
      name: 'BackFn',
      meta: {
        title: 'BackFn'
      },
      component: BackFn
    },
    {
      path: '/changeBgColor',
      name: 'ChangeBgColor',
      meta: {
        title: 'ChangeBgColor'
      },
      component: ChangeBgColor
    },
    {
      path: '/Toppic',
      name: 'Toppic',
      meta: {
        title: 'Toppic'
      },
      component: Toppic
    },
    {
      path: '/Exclusive',
      name: 'Exclusive',
      meta: {
        title: 'Exclusive'
      },
      component: Exclusive
    },
    {
      path: '/Active',
      name: 'Active',
      meta: {
        title: 'Active'
      },
      component: Active
    },
    {
      path: '/',
      redirect: 'index',
      component: Index,
      children: [
        {
          path: 'index',
          component: Index,
          name: 'Index',
          meta: {
            title: '首页'
          }
        }
      ]
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    return { x: 0, y: 0 }
  }
})

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', { isLoading: true })
  next()
})

router.afterEach(function (transition) {
  if (transition.matched.length === 0) {
    store.commit('updateLoadingStatus', { isLoading: false })
    store.commit('setError', { msg: '页面不存在，请检查您访问的页面地址！', show: true })
    return
  } else {
    // 防止404恢复
    store.commit('setError', { show: false })
  }
  store.commit('updateLoadingStatus', { isLoading: false })
  document.title = transition.meta.title || ''
})
export default router
