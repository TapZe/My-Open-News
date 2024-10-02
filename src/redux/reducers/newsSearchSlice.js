import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SEARCH_URI } from "../../constants/apiBaseURI";

export const newsSearchSlice = createSlice({
  name: "newsSearchSlice",
  initialState: {
    news: [],
    isLoading: false,
    errorMessage: "",
    totalPages: 0, // total pages
  },
  reducers: {
    fetchNewsSearchSuccess: (state, action) => {
      state.isLoading = false;
      state.errorMessage = "";
      state.news = action.payload.news;
      const totalPages = Math.floor(action.payload.meta.hits / 10); //API pagination is 10 items per pages, hits is the items recieved
      state.totalPages =
        action.payload.meta.hits % 10 === 0 ? totalPages - 1 : totalPages; //If item is just 10 it will return 1 but the page is only page 0
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

export function fetchNews(params = {}) {
  // default parameters for params object
  const {
    query = "indonesia",
    page = 0,
    begin_date = null,
    end_date = null,
    fq = null,
    sort = "relevance",
  } = params;

  return async (dispatch /*, getState*/) => {
    const { VITE_NYT_API_KEY } = import.meta.env;
    const params = {
      "api-key": VITE_NYT_API_KEY,
      query,
      page,
      sort,
    };
    // only add when it's inputed
    if (begin_date) params.begin_date = begin_date;
    if (end_date) params.end_date = end_date;
    if (fq) params.fq = fq;

    dispatch(fetchNewsSearchLoading(true));
    try {
      const { data } = await axios({
        method: "GET",
        url: SEARCH_URI,
        params,
      });
      const { docs: newsData, meta } = await data.response;
      dispatch(fetchNewsSearchSuccess({ news: newsData, meta }));
    } catch (error) {
      dispatch(fetchNewsSearchError(error.message));
    } finally {
      dispatch(fetchNewsSearchLoading(false));
    }
  };
}
