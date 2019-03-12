import {
  RECEIVE_HOME
} from '../mutation-type'

import {
  reqHome
} from '../../api'

const state = {
  home:{}
}

const mutations = {
  [RECEIVE_HOME](state,home){
    state.home = home
  }
}

const actions = {
  async getHome({commit}){
    const result = await reqHome()
    if(result.code === 0){
      commit(RECEIVE_HOME,result.data)
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