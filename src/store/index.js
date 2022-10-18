import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist';
import { hotelsModule } from './modules/hotelsModule';
import { searchParamsModule } from './modules/searchParamsModule';
import { userModule } from './modules/userModule'

const storeCache = new VuexPersistence({
  key: 'hotels-app',
  storage: window.localStorage,
  // сохраняется только isLogined
  reducer: (state) => ({
    isLogined: state.user.isLogined,
  }),
  filter: (mutation) => mutation.type === 'user/setIsLogined',
});

export default createStore({
  plugins: [storeCache.plugin],
  modules: {
    user: userModule,
    searchParams: searchParamsModule,
    hotels: hotelsModule,
  }
})