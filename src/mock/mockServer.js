// 使用mockjs来mock数据接口
import Mock from 'mockjs'
import fenlei from './fenlei_zhuanqu.json'
import home from './shouye_data.json'

Mock.mock('/fenlei',{
  code:0,
  data:fenlei
})

Mock.mock('/home',{
  code:0,
  data:home
})