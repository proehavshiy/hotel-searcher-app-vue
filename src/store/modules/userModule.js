import { fetchLogin } from "@/api";

export const userModule = {
  state: () => ({
    isLogined: false,
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
}