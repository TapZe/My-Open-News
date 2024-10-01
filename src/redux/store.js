import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { combineReducers } from "redux";

import newsSearchReducer from "./reducers/newsSearchSlice";
import savedNewsReducer from "./reducers/savedNewsSlice";

const persistConfig = {
  key: "root",
  storage,
};

// If the reducers that need persist is more than one
// const rootReducer = combineReducers({
//   newsSearchReducer,
//   savedNewsReducer,
// });

// place the rootReducer at the "savedNewsReducers" for multiple reducers persist
const persistedReducer = persistReducer(persistConfig, savedNewsReducer);

export const store = configureStore({
  reducer: {
    newsSearch: newsSearchReducer,
    persist: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore actions and paths where non-serializable values might exist
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
