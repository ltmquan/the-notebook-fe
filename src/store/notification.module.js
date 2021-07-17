export const notification = {
  namespaced: true,
  state: {
    text: '',
    type: '',
    showing: false
  },
  getters: {
    text(state) {
      return state.text;
    },
    type(state) {
      return state.type;
    },
    showing(state) {
      return state.showing;
    },
  },
  actions: {
    show({ commit }, { type, text }) {
      commit('show', { type, text });
    },
    hide({ commit }) {
      commit('hide');
    }
  },
  mutations: {
    show(state, { type, text }) {
      state.showing = true;
      state.type = type;
      state.text = text;
    },
    hide(state) {
      state.showing = false;
    }
  }
}