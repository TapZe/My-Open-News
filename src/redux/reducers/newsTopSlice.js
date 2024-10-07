import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TOP_STORY_URI } from "../../constants/apiBaseURI";
import NYT_API_KEYS from "../../constants/apiKeyRetriver";

export const newsTopSlice = createSlice({
  name: "newsTopSlice",
  initialState: {
    news: [],
    isLoading: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopNews.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(fetchTopNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.news = action.payload.news;
      })
      .addCase(fetchTopNews.rejected, (state, action) => {
        if (!action.meta.aborted) state.isLoading = false;
        state.errorMessage = action.error
          ? action.error.message
          : "Failed to fetch request";
      });
  },
});

// Action creators are generated for each case reducer function
// export const {  } = newsTopSlice.actions;

export default newsTopSlice.reducer;

export const fetchTopNews = createAsyncThunk(
  "newsTopSlice/fetchTopNews",
  async (section, { rejectWithValue, signal }) => {
    let attempt = 0;
    const maxAttempts = NYT_API_KEYS.length * 3; // 3 full cycles through all keys (how many keys * cycle)

    while (attempt < maxAttempts) {
      // Determine which API key to use on the current attempt
      const apiKey = NYT_API_KEYS[attempt % NYT_API_KEYS.length]; // Rotate through keys

      const queryParams = {
        "api-key": apiKey,
      };

      try {
        // Create the axios request with the signal to enable abort
        const { data } = await axios.get(TOP_STORY_URI(section), {
          params: queryParams,
          signal, // Pass the signal from the thunkAPI
        });

        // If successful, return the data
        const { results: newsData } = data;
        return { news: newsData };
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
