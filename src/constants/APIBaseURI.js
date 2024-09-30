const BASE_URI = import.meta.env.VITE_CURRENCY_API_URI;

export const SEARCH_URI = `${BASE_URI}/search/v2/articlesearch.json`;
export const TOP_STORY_URI = (section) => {
  return `${BASE_URI}/topstories/v2/${section}.json`;
};
export const TIMEWIRE_URI = (section) => {
  return `${BASE_URI}/news/v3/content/all/${section}.json`;
};
