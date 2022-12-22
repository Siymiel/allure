import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/userFeature"
import productsReducer from "./features/productsFeature"
import cartReducer from "./features/cartFeature"
import storeReducer from './features/storeFeature'
import categoryReducer from "./features/categoryFeature"
import wishlistFeature from "./features/wishlistFeature";
import slidersReducer from './features/sliderFeature';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  stores: storeReducer,
  categories: categoryReducer,
  wishlist: wishlistFeature,
  sliders: slidersReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);