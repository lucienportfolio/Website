import { createStore } from 'vuex'

const defaultState = {
  count: 0,
  path: ''
}
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state) {
      // eslint-disable-next-line no-param-reassign
      state.count += 1
    },
    SET_PATH: (state, path) => {
      state.path = path
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    path(state) {
      return state.path
    },
    double(state) {
      return 2 * state.count
    }
  }
})
