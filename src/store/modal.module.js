export const modal = {
  namespaced: true,
  state: {
    component: null,
    title: '',
    props: null
  },
  getters: {
    component(state) {
      return state.component;
    },
    title(state) {
      return state.title;
    },
    props(state) {
      return state.props;
    } 
  },
  actions: {
    open({ commit }, { component, title, props }) {
      commit('open', { component, title, props });
    },
    close({ commit }) {
      commit('close');
    }
  },
  mutations: {
    open(state, { component, title, props }) {
      state.component = component;
      state.title = title;
      state.props = props;
    },
    close(state) {
      state.component = null;
      state.title = '';
      state.props = null;
    }
  }
}