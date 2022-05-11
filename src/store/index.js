import { createStore } from 'vuex'

const defaultState = {
  count: 0
}
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state) {
      // eslint-disable-next-line no-param-reassign
      state.count += 1
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state) {
      return 2 * state.count
    }
  }
})
