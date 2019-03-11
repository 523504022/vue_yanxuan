import {RECEIVE_REMENSEARCH} from '../mutation-type'

import {reqRemen} from '../../api'

const state = {
  remen:{}
}

const mutations = {
  [RECEIVE_REMENSEARCH](state,remen){
    state.remen = remen
  }
}

const actions = {
  async getRemen({commit}){
    const result = await reqRemen()
    if(result.code === '200'){
      commit(RECEIVE_REMENSEARCH,result.data)
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