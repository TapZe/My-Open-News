import { useEffect, useState } from "react";
import { fetchNews } from "../redux/reducers/newsSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import NewsPagination from "../components/news/NewsPagination";
import ErrorMessage from "../components/ErrorMessage";
import NewsGrid from "../components/news/NewsGrid";

const SearchNews = () => {
  const { news, isLoading, errorMessage, totalPages } = useSelector(
    (state) => state.newsSearch
  );
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const payload = {
    query: "programming",
    fq: `section_name:("technology")`,
  };

  useEffect(() => {
    // set date for one month ago
    const today = new Date();
    const oneMonthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
    payload.end_date = today.toISOString().slice(0, 10).replace(/-/g, ""); // format to 20201230 (as the api needs)
    payload.begin_date = oneMonthAgo
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, ""); // format to 20201230 (as the api needs)

    dispatch(
      fetchNews({
        ...payload,
        page,
      })
    );
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

export default SearchNews;
