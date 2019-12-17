import mutations from './mutations'
import actions from './action'
import getters from './getters'
import state from './state'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    mutations,
    actions,
    getters,
    state
})