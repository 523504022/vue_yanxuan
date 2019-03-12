import ajax from './ajax'
// 使用代理
const prefix = '/api'
// 获取分类列表数据
export const reqFenlei = () => ajax('/fenlei')
// 获取热门搜索数据
export const reqRemen = () => ajax(`${prefix}/xhr/search/init.json`,'POST')
// 获取首页数据
export const reqHome =() => ajax('/home')
