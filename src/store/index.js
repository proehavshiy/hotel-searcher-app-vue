import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist';
import { userModule } from './modules/userModule'

const storeCache = new VuexPersistence({
  key: 'hotels-app',
  storage: window.localStorage,
  // сохраняется только isLogined
  reducer: (state) => ({
    isLogined: state.user.isLogined,
  }),
  filter: (mutation) => mutation.type === 'setIsLogined',
});

export default createStore({
  plugins: [storeCache.plugin],
  modules: {
    user: userModule,
  }
})


// user: userReducer,
//   searchParams: searchParamsReducer,
//     hotels: hotelsReducer,
//       duty: dutyReducer,