import shop from '../../api/shop'
import * as types from '../mutation-types'

const state = {
  campusType: '',
}

// getters
const getters = {
  campusType: state => state.campusType,
}

// actions
const actions = {
  changeCampusType ({ commit, state }, id) {
    commit(types.CHANCE_CAMPUS_TYPE, { id })
  }
}

// mutations
const mutations = {
  [types.CHANCE_CAMPUS_TYPE] (state, { id }) {
    state.campusType = id
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}
