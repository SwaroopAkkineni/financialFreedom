import Vue from 'vue'
import Vuex from 'vuex'
import userInput from './modules/userInput'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInput: userInput
  }
})
