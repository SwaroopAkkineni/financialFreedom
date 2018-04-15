const state = {
  message: 'testA',
  yearsToRetirement: 'testB',
  initialInvestment: 'testC',
  continousInvestment: 'testD',
}

const actions = {
  setMessage({ commit, state }, message) {
    commit('setMessage',message)
  },
  setYearsToRetirement({ commit, state }, yearsToRetirement) {
    commit('setYearsToRetirement',yearsToRetirement)
  },
  setInitialInvestment({ commit, state }, initialInvestment) {
    commit('setInitialInvestment',initialInvestment)
  },
  setContinousInvestment({ commit, state }, continousInvestment) {
    commit('setContinousInvestment',continousInvestment)
  },
}

const mutations = {
  setMessage(state, message) {
    state.message = message
  },
  setYearsToRetirement(state, yearsToRetirement) {
    state.yearsToRetirement = yearsToRetirement
  },
  setInitialInvestment(state, initialInvestment) {
    state.initialInvestment = initialInvestment
  },
  setContinousInvestment(state, continousInvestment) {
    state.continousInvestment = continousInvestment
  },
}

const getters = {
  getMessage: state => {
    return state.message
  },
  getYearsToRetirement: state => {
    return state.yearsToRetirement
  },
  getInitialInvestment: state => {
    return state.initialInvestment
  },
  getContinousInvestment: state => {
    return state.continousInvestment
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
