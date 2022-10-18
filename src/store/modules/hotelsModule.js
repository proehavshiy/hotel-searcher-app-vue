import { fetchHotels, fetchImages } from "@/api";

export const hotelsModule = {
  state: () => ({
    fetched: {
      hotels: [],
      info: {
        city: '',
        date: null,
        days: null,
      },
    },
    favourites: [],
    images: [],
    fetchStatus: {
      hotels: {
        error: null,
        isLoading: false,
      },
      images: {
        error: null,
        isLoading: false,
      }
    }
  }),
  getters: {},
  mutations: {
    setHotels(state, value) {
      state.fetched.hotels = value;
    },
    setInfo(state, value) {
      state.fetched.info = value;
    },
    setFavourites(state, value) {
      state.favourites = value;
    },
    setImages(state, value) {
      state.images = value;
    },
    setError(state, { param, value }) {
      switch (param) {
        case 'hotels':
          state.fetchStatus.hotels.error = value;
          break;
        case 'images':
          state.fetchStatus.images.error = value;
          break;
        default:
          return state;
      }
    },
    setIsLoading(state, { param, value }) {
      switch (param) {
        case 'hotels':
          state.fetchStatus.hotels.isLoading = value;
          break;
        case 'images':
          state.fetchStatus.images.isLoading = value;
          break;
        default:
          return state;
      }
    }
  },
  actions: {
    async initFetchHotels({ commit }, { city, date, days }) {
      console.log('hotels payload:', { city, date, days });
      try {
        commit('setIsLoading', { param: 'hotels', value: true });
        const hotels = await fetchHotels({ city, date, days });
        if (hotels.status === 'error') throw new Error(hotels.message);
        commit('setHotels', hotels);
        commit('setInfo', { city, date, days });
      } catch (error) {
        commit('setError', { param: 'hotels', value: error.message });
      } finally {
        commit('setIsLoading', { param: 'hotels', value: false })
      }
    },
    async initFetchImages({ commit }, payload) {
      console.log('img payload:', payload);
      try {
        commit('setIsLoading', { param: 'images', value: true });

        const images = await fetchImages({ searchParam: payload });
        if (images.status === 'error') throw new Error(images.message);
        commit('setImages', images);
      } catch (error) {
        commit('setError', { param: 'images', value: error.message });
      } finally {
        commit('setIsLoading', { param: 'images', value: false })
      }
    },
  },
  namespaced: true,
}