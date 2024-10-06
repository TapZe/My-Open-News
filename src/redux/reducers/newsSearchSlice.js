import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SEARCH_URI } from "../../constants/apiBaseURI";
import NYT_API_KEYS from "../../constants/apiKeyRetriver";

export const newsSearchSlice = createSlice({
  name: "newsSearchSlice",
  initialState: {
    news: [],
    isLoading: false,
    errorMessage: "",
    totalPages: 0, // total pages
    page: 0, //current page
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.news = action.payload.news;
        const totalPages = Math.floor(action.payload.meta.hits / 10); //API pagination is 10 items per page
        state.totalPages =
          action.payload.meta.hits % 10 === 0 ? totalPages - 1 : totalPages;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        if (!action.meta.aborted) state.isLoading = false;
        state.errorMessage = action.error
          ? action.error.message
          : "Failed to fetch request";
      });
  },
});

// Action creators are generated for each case reducer function
export const { setPage } = newsSearchSlice.actions;

export default newsSearchSlice.reducer;

export const fetchNews = createAsyncThunk(
  "newsSearchSlice/fetchNews",
  async (params = {}, { rejectWithValue, signal }) => {
    // Default parameter handling
    const {
      query = "indonesia",
      page = 0,
      begin_date = null,
      end_date = null,
      fq = null,
      sort = "relevance",
    } = params;

    let attempt = 0;
    const maxAttempts = NYT_API_KEYS.length * 3; // 3 full cycles through all keys (how many keys * cycle)

    while (attempt < maxAttempts) {
      // Determine which API key to use on the current attempt
      const apiKey = NYT_API_KEYS[attempt % NYT_API_KEYS.length]; // Rotate through keys

      const queryParams = {
        "api-key": apiKey,
        query,
        page,
        sort,
      };

      // Add optional filters if provided
      if (begin_date) queryParams.begin_date = begin_date;
      if (end_date) queryParams.end_date = end_date;
      if (fq) queryParams.fq = fq;

      try {
        // Create the axios request with the signal to enable abort
        const { data } = await axios.get(SEARCH_URI, {
          params: queryParams,
          signal, // Pass the signal from the thunkAPI
        });

        // If successful, return the data
        const { docs: newsData, meta } = data.response;
        return { news: newsData, meta };
      } catch (error) {
        // If error hit a 429 (Too Many Requests), increment attempt and try the next key
        if (error.response && error.response.status === 429) {
          console.warn(
            `Attempt ${attempt + 1}: API Key ${
              (attempt % NYT_API_KEYS.length) + 1
            } hit rate limit, switching to the next key...`
          );
          attempt++;
        } else {
          // For other errors, reject immediately
          return rejectWithValue(error.message);
        }
      }
    }

    // If we failed after 9 attempts (3 full rotations through the keys), return an error
    return rejectWithValue(
      "All API keys exceeded rate limits or failed after 9 attempts."
    );
  }
);
