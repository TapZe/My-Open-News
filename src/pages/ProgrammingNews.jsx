import { useEffect } from "react";
import { fetchNews, setPage } from "../redux/reducers/newsSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import NewsPagination from "../components/news/NewsPagination";
import ErrorMessage from "../components/ErrorMessage";
import NewsSearchGrid from "../components/news/NewsSearchGrid";

const SearchNews = () => {
  const { page } = useSelector((state) => state.newsSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    // setting the parameters
    const params = {
      query: "computer",
      fq: `section_name:("technology")`,
      page,
    };
    // set date for one month ago
    const today = new Date();
    const oneMonthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
    params.end_date = today.toISOString().slice(0, 10).replace(/-/g, ""); // format to 20201230 (as the api needs)
    params.begin_date = oneMonthAgo
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, ""); // format to 20201230 (as the api needs)

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
      <h1 className="text-3xl font-bold text-center mb-10">
        Monthly Programming <span className="text-cyan-600">News</span>
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
