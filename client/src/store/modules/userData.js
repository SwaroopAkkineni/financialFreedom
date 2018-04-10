const state = {
  message: 'test',
  yearsToRetirement: 'testa',
  initialInvestment: 'testb',
  continousInvestment: 'testc'
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
  }
}

// const actions = {
//   setMessage({commit}, message){
//     commit('setMessage', message)
//   },
//   setYearsToRetirement({commit}, yearsToRetirement){
//     commit('setYearsToRetirement', yearsToRetirement)
//   },
//   setInitialInvestment({commit}, initialInvestment){
//     commit('setInitialInvestment', initialInvestment)
//   },
//   setContinousInvestment({commit}, continousInvestment){
//     commit('setContinousInvestment', continousInvestment)
//   }
// }
//
// const mutations = {
//   setMessage({state}, message){
//     state.message = message
//   },
//   setYearsToRetirement({state}, yearsToRetirement){
//     state.yearsToRetirement = yearsToRetirement
//   },
//   setInitialInvestment({state}, initialInvestment){
//     state.initialInvestment = initialInvestment
//   },
//   setContinousInvestment({state}, continousInvestment){
//     state.continousInvestment = continousInvestment
//   }
// }

export default {
  state,
  getters
}
