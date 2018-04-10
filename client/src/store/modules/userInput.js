const state = {
  message: 'testA'
}

const getters = {
  getMessage: state => {
      return state.message
    }
}

export default {
  state,
  getters,
}
