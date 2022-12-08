import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers/cartSlice";
import dataReducer from "./Reducers/fullDataSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "cart",
  storage,
};
const cartPersist = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  cart: cartPersist,
  data: dataReducer,
});

const myStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default myStore;
export const persistor = persistStore(myStore);
