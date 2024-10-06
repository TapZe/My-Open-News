import { useEffect } from "react";
import { fetchNews, setPage } from "../redux/reducers/newsSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import NewsGrid from "../components/news/NewsGrid";
import NewsPagination from "../components/news/NewsPagination";

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
    const promise = dispatch(fetchNews(params));
    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise
      promise.abort();
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
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-10">
          {query?.trim() // Make sure not empty (?. is for if the query an undefined var)
            ? query
            : "Indonesia"}{" "}
          <span className="text-cyan-600">News</span>
        </h1>
        {/* Error Msg */}
        <ErrorMessage />
        {/* Skeleton and news*/}
        <NewsGrid />
        {/* Pagination */}
        <NewsPagination />
      </div>
    </>
  );
};

export default SearchNews;
