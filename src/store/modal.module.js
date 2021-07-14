export const modal = {
  namespaced: true,
  state: {
    component: null,
    title: '',
    props: null,
    callback: null
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
    },
    callback(state) {
      return state.callback;
    } 
  },
  actions: {
    open({ commit }, { component, title, props, callback }) {
      commit('open', { component, title, props, callback });
    },
    close({ commit }) {
      commit('close');
    }
  },
  mutations: {
    open(state, { component, title, props, callback }) {
      state.component = component;
      state.title = title;
      state.props = props;
      state.callback = callback;
    },
    close(state) {
      state.component = null;
      state.title = '';
      state.props = null;
      state.callback = null;
    }
  }
}