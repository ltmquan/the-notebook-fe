export const spinner = {
  namespaced: true,
  state: {
    active: false
  },
  getters: {
    active(state) {
      return state.active;
    }
  },
  actions: {
    show({ commit }) {
      commit('show');
    },
    hide({ commit }) {
      commit('hide');
    }
  },
  mutations: {
    show(state) {
      state.active = true;
    },
    hide(state) {
      state.active = false;
    }
  }
}