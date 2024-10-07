const BASE_URI = import.meta.env.VITE_NYT_API_BASE_URI;

export const SEARCH_URI = `${BASE_URI}/search/v2/articlesearch.json`;
export const TOP_STORY_URI = (section = "home") => {
  return `${BASE_URI}/topstories/v2/${section}.json`;
};
export const TIMEWIRE_URI = (section = "home page") => {
  return `${BASE_URI}/news/v3/content/all/${section}.json`;
};
