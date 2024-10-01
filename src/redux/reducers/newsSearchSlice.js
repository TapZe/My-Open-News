import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SEARCH_URI } from "../../constants/apiBaseURI";

export const newsSearchSlice = createSlice({
  name: "newsSearchSlice",
  initialState: {
    news: [],
    isLoading: false,
    errorMessage: "",
  },
  reducers: {
    fetchNewsSearchSuccess: (state, action) => {
      state.isLoading = false;
      state.errorMessage = "";
      state.news = action.payload;
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

export function fetchNews(query = "indonesia", begin_date, end_date) {
  return async (dispatch /*, getState*/) => {
    const { VITE_NYT_API_KEY } = import.meta.env;
    const params = {
      "api-key": VITE_NYT_API_KEY,
      query,
    };
    if (begin_date) params.begin_date = begin_date;
    if (end_date) params.end_date = end_date;

    dispatch(fetchNewsSearchLoading(true));
    try {
      const { data } = await axios({
        method: "GET",
        url: SEARCH_URI,
        params,
      });
      const { docs: newsData } = await data.response;
      dispatch(fetchNewsSearchSuccess(newsData));
    } catch (error) {
      dispatch(fetchNewsSearchError(error.message));
    } finally {
      dispatch(fetchNewsSearchLoading(false));
    }
  };
}
