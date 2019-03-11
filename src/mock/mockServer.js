// 使用mockjs来mock数据接口
import Mock from 'mockjs'
import fenlei from './fenlei_zhuanqu.json'

Mock.mock('/fenlei',{
  code:0,
  data:fenlei
})