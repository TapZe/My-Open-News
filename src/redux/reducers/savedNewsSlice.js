import { createSlice } from "@reduxjs/toolkit";

const savedNewsSlice = createSlice({
  name: "savedNewsSlice",
  initialState: {
    savedArticles: [],
  },
  reducers: {
    saveArticle: (state, action) => {
      // check if the inputed article is already saved
      const articleExists = state.savedArticles.some(
        (article) => article._id === action.payload._id
      );

      // If not, save the article
      if (!articleExists) {
        state.savedArticles.push(action.payload);
      }
    },
    removeArticle: (state, action) => {
      state.savedArticles = state.savedArticles.filter(
        (article) => article._id !== action.payload._id
      );
    },
  },
});

export const { saveArticle, removeArticle } = savedNewsSlice.actions;
export default savedNewsSlice.reducer;
