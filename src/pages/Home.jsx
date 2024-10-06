import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, setPage } from "../redux/reducers/newsSearchSlice";
import NewsPagination from "../components/news/NewsPagination";
import ErrorMessage from "../components/ErrorMessage";
import NewsGrid from "../components/news/NewsGrid";

const Home = () => {
  const { page } = useSelector((state) => state.newsSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    // setting the parameters
    const params = {
      page,
    };
    const promise = dispatch(fetchNews(params));
    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise
      promise.abort();
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
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-10">
          Indonesia <span className="text-cyan-600">News</span>
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

export default Home;
