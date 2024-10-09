import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, setPage } from "../redux/reducers/newsSearchSlice";

const useSearchNews = (params) => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.newsSearch);
  params.page = page;

  useEffect(() => {
    const searchNews = dispatch(fetchNews(params));
    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise "searchNews"
      searchNews.abort();
    };
  }, [params, page]);

  // Reset page when unmounted only
  useEffect(() => {
    return () => {
      dispatch(setPage(0));
    };
  }, []);
};

export default useSearchNews;
