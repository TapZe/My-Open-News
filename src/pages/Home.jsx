import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../redux/reducers/newsSearchSlice";
import NewsPagination from "../components/news/NewsPagination";
import ErrorMessage from "../components/ErrorMessage";
import NewsGrid from "../components/news/NewsGrid";

const Home = () => {
  const { news, isLoading, errorMessage, totalPages } = useSelector(
    (state) => state.newsSearch
  );
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch default data of "indonesia"
    const promise = dispatch(fetchNews({ params: { page } }));
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
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        {/* Skeleton and news*/}
        <NewsGrid news={news} isLoading={isLoading} />
        {/* Pagination */}
        {totalPages > 1 && (
          <NewsPagination
            page={page}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default Home;
