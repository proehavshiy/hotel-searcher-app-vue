import { fetchLogin } from "@/api";
import unpackLocalStorage from "@/utils/unpackLocalStorage";

function initIsLoginedState() {
  const [isExist, { isLogined }] = unpackLocalStorage('hotels-app');
  if (isExist && isLogined) {
    return true;
  } else {
    return false;
  }
}

export const userModule = {
  state: () => ({
    isLogined: initIsLoginedState(),
    fetchStatus: {
      error: null,
      isLoading: false,
    }
  }),
  getters: {
  },
  mutations: {
    setIsLogined(state, value) {
      state.isLogined = value;
    },
    setError(state, value) {
      state.fetchStatus.error = value;
    },
    setIsLoading(state, value) {
      state.fetchStatus.isLoading = value;
    }
  },
  actions: {
    async initFetchLogin({ commit }, { loginParams, callback }) {
      try {
        commit('setIsLoading', true);
        const loginResponse = await fetchLogin({ loginParams });
        if (loginResponse.status === 'error') throw new Error(loginResponse.message);
        commit('setIsLogined', loginResponse.isLogined);
        callback();
      } catch (error) {
        commit('setIsLogined', false);
        commit('setError', error.message)
      } finally {
        commit('setIsLoading', false);
      }
    }
  },
  namespaced: true,
}