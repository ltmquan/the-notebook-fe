export const note = {
  namespaced: true,
  state: {
    id: null,
    name: null
  },
  getters: {
    id(state) {
      return state.id;
    },
    name(state) {
      return state.name;
    }
  },
  actions: {
    set({ commit }, notebook) {
      commit('setState', notebook);
    }
  },
  mutations: {
    setState(state, notebook) {
      state.id = notebook.id;
      state.name = notebook.name;
    }
  }
}