// Vuex最核心的管理对象模块store

// 引入vue vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 引入各个模块的vuex文件
import fenlei from './modules/fenlei'
import search from './modules/search'
import home from './modules/home'
import shiwu from './modules/shiwu'
// 声明使用vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    fenlei,
    search,
    home,
    shiwu
  }
})