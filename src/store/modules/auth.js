import shop from '../../api/shop'
import * as types from '../mutation-types'
import http from '../../http/axios'
import router from '../../router'

const state = {
  user_info: [],
}

// getters
const getters = {
  user_info: state => state.user_info
}

// actions
const actions = {
  async userLogin ({ commit, state }, userFrom) {
    const resData = await http.get('/api/login',userFrom)
    console.log(userFrom)
    if(resData.code === '200'){
      console.log(resData.data)
      router.push({path:'/home'})
      sessionStorage.setItem("token",resData.data.token)
      let info = resData.data
      commit(types.USER_INFO, info)
    }
  }
}

// mutations
const mutations = {
  [types.USER_INFO] (state, info ) {
    state.user_info = info
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
