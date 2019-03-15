import {
  RECEIVE_TABS,
  RECEIVE_TUIJIAN,
  RECEIVE_TUIJIAN2
} from '../mutation-type'

import {
  reqTabs,
  reqTuijian,
  reqTuijian2
} from '../../api'

const state = {
  tabs:{},
  tuijian:[],
  tuijian2:[]
}

const mutations = {
  [RECEIVE_TABS](state,tabs){
    state.tabs = tabs
  },
  [RECEIVE_TUIJIAN](state,tuijian){
    state.tuijian = tuijian
  },
  [RECEIVE_TUIJIAN2](state,tuijian){
    state.tuijian2 = tuijian
  }
}

const actions = {
  async getTabs({commit}){
    const result = await reqTabs()
    if(result.code === '200'){
      commit(RECEIVE_TABS,result.data)
    }
  },

  async getTuijian({commit}){
    const result = await reqTuijian()
    if(result.code === '200'){
      commit(RECEIVE_TUIJIAN,result.data)
    }
  },

  async getTuijian2({commit},page){
    const result = await reqTuijian2(page)
    if(result.code === '200'){
      commit(RECEIVE_TUIJIAN2,result.data)
    }
  },
}

const getters = {
  
}

export default{
  state,
  mutations,
  actions,
  getters
}