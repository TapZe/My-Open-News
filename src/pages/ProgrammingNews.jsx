import { useEffect, useState } from "react";
import { fetchNews } from "../redux/reducers/newsSearchSlice";
import { useDispatch } from "react-redux";
import NewsPagination from "../components/news/NewsPagination";
import ErrorMessage from "../components/ErrorMessage";
import NewsGrid from "../components/news/NewsGrid";

const SearchNews = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    // setting the parameters
    const params = {
      query: "programming",
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
          Monthly Programming <span className="text-cyan-600">News</span>
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
