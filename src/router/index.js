import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Fenlei from '../pages/Fenlei/Fenlei.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import User from '../pages/User/User.vue'
import Search from '../pages/Search/Search.vue'

import FenleiList from '../pages/Fenlei/FenleiList/FenleiList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/fenlei',
      component: Fenlei,
      meta: {
        showFooter: true
      },
      redirect: '/fenlei/list',
      children:[
        {
          path:'/fenlei/list',
          component: FenleiList,
          meta: {
            showFooter: true
          },
        }
      ]
    },
    {
      path: '/shiwu',
      component: Shiwu,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopcar',
      component: ShopCar,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/user',
      component: User,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/search',
      component: Search,
    },
    {
      // 设置默认跳转到home路由
      path: '/',
      redirect: '/home'
    }
  ]
})
