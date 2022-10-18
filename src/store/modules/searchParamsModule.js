export const searchParamsModule = {
  state: () => ({
    city: 'Москва',
    date: Date.now(),
    days: 1,
  }),
  getters: {},
  mutations: {
    setCity(state, value) {
      state.city = value;
    },
    setDate(state, value) {
      state.date = value;
    },
    setDays(state, value) {
      state.days = value;
    }
  },
  actions: {},
  namespaced: true,
}