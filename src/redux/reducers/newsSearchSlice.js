import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SEARCH_URI } from "../../constants/apiBaseURI";

export const newsSearchSlice = createSlice({
  name: "newsSearchSlice",
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: "",
  },
  reducers: {
    fetchNewsSearchSuccess: (state, action) => {
      state.isLoading = false;
      state.errorMessage = "";
      state.data = action.payload;
    },
    fetchNewsSearchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    fetchNewsSearchError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchNewsSearchSuccess,
  fetchNewsSearchLoading,
  fetchNewsSearchError,
} = newsSearchSlice.actions;

export default newsSearchSlice.reducer;

export function fetchNews(query = "indonesia") {
  return async (dispatch /*, getState*/) => {
    const { VITE_NYT_API_KEY } = import.meta.env;
    dispatch(fetchNewsSearchLoading(true));
    try {
      const { data } = await axios({
        method: "GET",
        url: SEARCH_URI,
        params: {
          "api-key": VITE_NYT_API_KEY,
          query,
        },
      });
      const { docs: news } = await data.response;
      dispatch(fetchNewsSearchSuccess(news));
    } catch (error) {
      dispatch(fetchNewsSearchError(error.message));
    } finally {
      dispatch(fetchNewsSearchLoading(false));
    }
  };
}
