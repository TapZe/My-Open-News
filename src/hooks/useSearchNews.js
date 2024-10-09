import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, setPage } from "../redux/reducers/newsSearchSlice";

const useSearchNews = (params = {}) => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.newsSearch);

  // Memoize the params to prevent unnecessary re-renders (every object create a new reference each re-render)
  // This will memorize the params in a cache
  const memoizedParams = useMemo(() => ({ ...params, page }), [params, page]);

  useEffect(() => {
    const searchNews = dispatch(fetchNews(memoizedParams));
    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise "searchNews"
      searchNews.abort();
    };
  }, [memoizedParams]);

  // Reset page when unmounted only
  useEffect(() => {
    return () => {
      dispatch(setPage(0));
    };
  }, []);
};

export default useSearchNews;
