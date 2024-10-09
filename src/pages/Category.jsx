import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import ErrorMessage from "../components/ErrorMessage";
import NewsSearchGrid from "../components/news/NewsSearchGrid";
import NewsPagination from "../components/news/NewsPagination";
import useSearchNews from "../hooks/useSearchNews";
import CategoryFilter from "../components/news/CategoryFilter";

const Category = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section") || "Business";

  // Memoize the params to prevent unnecessary re-renders (every object create a new reference each re-render)
  // This will memorize the params in a cache
  const params = useMemo(
    () => ({
      query: "",
      fq: `news_desk:(${section})`,
    }),
    [section]
  );
  const searchNews = useSearchNews(params);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        Category <span className="text-cyan-600">News</span>
      </h1>
      {/* Error Msg */}
      <ErrorMessage />
      {/* Filtering Category */}
      <CategoryFilter />
      {/* Skeleton and news*/}
      <NewsSearchGrid />
      {/* Pagination */}
      <NewsPagination />
    </>
  );
};

export default Category;
