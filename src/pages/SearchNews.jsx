import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import ErrorMessage from "../components/ErrorMessage";
import NewsPagination from "../components/news/NewsPagination";
import NewsSearchGrid from "../components/news/NewsSearchGrid";
import useSearchNews from "../hooks/useSearchNews";

const SearchNews = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  // Memoize the params to prevent unnecessary re-renders (every object create a new reference each re-render)
  // This will memorize the params in a cache
  const params = useMemo(
    () => ({
      query,
    }),
    [query]
  );
  const searchNews = useSearchNews(params);

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
