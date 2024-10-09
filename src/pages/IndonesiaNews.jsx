import { useMemo } from "react";

import NewsPagination from "../components/news/NewsPagination";
import ErrorMessage from "../components/ErrorMessage";
import NewsSearchGrid from "../components/news/NewsSearchGrid";
import useSearchNews from "../hooks/useSearchNews";

const IndonesiaNews = () => {
  // Memoize the params to prevent unnecessary re-renders (every object create a new reference each re-render)
  // This will memorize the params in a cache
  const params = useMemo(() => ({}), []);
  const searchNews = useSearchNews(params);

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
