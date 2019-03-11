import {
  RECEIVE_FENLEI,
} from '../mutation-type'

import {
  reqFenlei,
} from '../../api'

const state = {
  fenlei:{}
}

const mutations = {
  [RECEIVE_FENLEI](state,fenlei){
    state.fenlei = fenlei
  }
}

const actions = {
  async getFenlei({commit}){
    const result = await reqFenlei()
    if(result.code === 0){
      commit(RECEIVE_FENLEI,result.data)
    }
  }
}

const getters = {
  
}

export default{
  state,
  mutations,
  actions,
  getters
}