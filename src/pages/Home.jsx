import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../redux/reducers/newsSearchSlice";
import NewsPagination from "../components/news/NewsPagination";
import ErrorMessage from "../components/ErrorMessage";
import NewsGrid from "../components/news/NewsGrid";

const Home = () => {
  const [page, setPage] = useState(0); // can be centralize with the already existing redux
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

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

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
        <NewsPagination page={page} handlePageChange={handlePageChange} />
      </div>
    </>
  );
};

export default Home;
