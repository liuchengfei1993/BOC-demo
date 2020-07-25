import Vue from 'vue'
import Router from 'vue-router'
// const _import = file => () => import('@/page/' + file + '.vue');

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/page/login/login'], resolve)
    },
    {
      path: '/',
      component: resolve => require(['@/page/app-frame'], resolve),
      children: [{
        path: 'home',
        name: 'Home',
        component: resolve => require(['@/page/home/home'], resolve),
      }]
    },
    {
      path: '/accurateSellTask',
      name: 'accurateSellTask',
      component: resolve => require(['@/page/accurateSellTask/task'], resolve)
    },
    {
      path: '/taskInfo',
      name: 'taskInfo',
      component: resolve => require(['@/page/accurateSellTask/taskInfo'], resolve)
    },
  ]
})