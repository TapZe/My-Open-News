import { useEffect } from "react";
import { fetchNews, setPage } from "../redux/reducers/newsSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import NewsPagination from "../components/news/NewsPagination";
import NewsSearchGrid from "../components/news/NewsSearchGrid";

const SearchNews = () => {
  const { page } = useSelector((state) => state.newsSearch);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const params = {
      query,
      page,
    };
    const searchNews = dispatch(fetchNews(params));
    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise "searchNews"
      searchNews.abort();
    };
  }, [page, query]);

  // Reset page when unmounted only
  useEffect(() => {
    return () => {
      dispatch(setPage(0));
    };
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        {query?.trim() // Make sure not empty (?. is for if the query an undefined var)
          ? query
          : "Indonesia"}{" "}
        <span className="text-cyan-600">News</span>
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

export default SearchNews;
