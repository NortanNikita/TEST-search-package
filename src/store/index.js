import Vue from 'vue'
import Vuex from 'vuex'
import modulePackages from './packages/_index'
import pathField from '../helpers/pathField'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading:false,
    isOpenModal: false,
    modalData: {}
  },
  mutations: {
    SET_DATA(state, {field, data}) {
      pathField(state, field, data)
    }
  },
  modules: {
    modulePackages
  }
})
export default store