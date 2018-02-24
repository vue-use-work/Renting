import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import cart from './modules/cart'
import products from './modules/products'
import district from './modules/district'
import auth from './modules/auth'


import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

import createLogger from '../plugins/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    cart,
    products,
    district,
    auth
  },
  strict: debug,
  plugins: debug ? [createLogger(),vuexLocal.plugin] : []
  //plugins: [vuexLocal.plugin]
})
