import { status } from '../constants/api-response.constant';
import authService from '../services/auth.service';
import userService from '../services/user.service';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  getters: {
    isLoggedIn(state) {
      return state.status.loggedIn;
    },
    currentUser(state) {
      return state.user;
    }
  },
  actions: {
    login({ commit }, user) {
      return authService.login(user)
        .then(
          response => {
            if (response.status === status.SUCCESS) {
              commit('login', response);
            }
            return Promise.resolve(response);
          }
        );
    },
    logout({ commit }) {
      return userService.logout()
        .then(
          response => {
            commit('logout');
            
            return response;
          }
        ).catch(
          () => {
            console.log('server error');
          }
        );
    },
    updateState({ commit }) {
      commit('updateState');
    }
  },
  mutations: {
    login(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    updateState(state) {
      const newuser = JSON.parse(localStorage.getItem('user'));
      
      state.status.loggedIn = !!newuser;
      state.user = newuser ? newuser : null;
    }
  }
}