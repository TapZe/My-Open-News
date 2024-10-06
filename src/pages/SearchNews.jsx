import { useEffect, useState } from "react";
import { fetchNews } from "../redux/reducers/newsSearchSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import NewsGrid from "../components/news/NewsGrid";
import NewsPagination from "../components/news/NewsPagination";

const SearchNews = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { query } = useParams();

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

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

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
        <NewsPagination page={page} handlePageChange={handlePageChange} />
      </div>
    </>
  );
};

export default SearchNews;
