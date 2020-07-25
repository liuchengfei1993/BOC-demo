import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: 'Login',
    component:resolve =>require(['@/page/login/login'],resolve)
  },
   {
    path: '/',
    component:resolve =>require(['@/page/app-frame'],resolve) ,
    children: [{
      path: 'home',
      name: 'Home',
      component: resolve =>require(['@/page/home/home'],resolve) ,
    },
    {
      path: 'producttool',
      name: 'producttool',
      component: resolve =>require(['@/page/mytool/product'],resolve) ,
    },
  ]
  }]
})
