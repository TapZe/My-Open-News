import { configureStore } from "@reduxjs/toolkit";
import newsSearchReducer from "./reducers/newsSearchSlice";

export const store = configureStore({
  reducer: {
    newsSearch: newsSearchReducer,
  },
});
