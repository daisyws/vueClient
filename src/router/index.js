import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login.vue'
// import Reg from '@/components/Reg.vue'
import SearchPage from '@/components/SearchPage.vue'
// import SelectPage from '@/components/SelectPage.vue'
import Home from '@/components/HomePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    , {
    //   path: '/register',
    //   component: Reg
    // }, {
        path: '/helloWorld',
        component: HelloWorld
    },{
        path: '/search',
        component: SearchPage
    // },{
    //     path: '/select',
    //     component: SelectPage
    },
    {
        path: '/',
        redirect: '/login'
    }, {
        path: '*',
        redirect: '/login'
    }
  ]
})