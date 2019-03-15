import ajax from './ajax'
// 使用代理
const prefix = '/api'
// 获取分类列表数据
export const reqFenlei = () => ajax('/fenlei')
// 获取热门搜索数据
export const reqRemen = () => ajax(`${prefix}/xhr/search/init.json`,'POST')
// 获取首页数据
export const reqHome =() => ajax('/home')
// 获取识物界面导航栏数据
export const reqTabs =() => ajax(`${prefix}/topic/v1/find/getTabs.json`)
// 获取识物推荐数据
export const reqTuijian = () => ajax(`${prefix}/topic/v1/find/recManual.json`)
// 获取识物推荐数据2
export const reqTuijian2 = (page,exceptlds = '8166,4035,8741,3583,8742,8250,8686,6965,8687,8303,8331,6410,8693,3438,4037,4024,3463,2876,2747,3413,2081,2082,1487,7318,1004,5821,7696,7710,7949,6696') => ajax(`${prefix}/topic/v1/find/recAuto.json?page=${page}&size=5&exceptIds=${exceptlds}`)
