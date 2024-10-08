import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, setPage } from "../redux/reducers/newsSearchSlice";
import NewsPagination from "../components/news/NewsPagination";
import ErrorMessage from "../components/ErrorMessage";
import NewsSearchGrid from "../components/news/NewsSearchGrid";

const IndonesiaNews = () => {
  const { page } = useSelector((state) => state.newsSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    // setting the parameters
    const params = {
      page,
    };
    const searchNews = dispatch(fetchNews(params));
    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise "searchNews"
      searchNews.abort();
    };
  }, [page]);

  // Reset page when unmounted only
  useEffect(() => {
    return () => {
      dispatch(setPage(0));
    };
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        Indonesia <span className="text-cyan-600">News</span>
      </h1>
      {/* Error Msg */}
      <ErrorMessage />
      {/* Skeleton and news*/}
      <NewsSearchGrid />
      {/* Pagination */}
      <NewsPagination />
    </>
  );
};

export default IndonesiaNews;
