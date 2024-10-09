import { useMemo } from "react";

import NewsHomeGrid from "../components/news/NewsHomeGrid";
import ErrorMessage from "../components/ErrorMessage";
import useSearchNews from "../hooks/useSearchNews";
import useTopNews from "../hooks/useFetchTopNews";

const Home = () => {
  // Memoize the params to prevent unnecessary re-renders (every object create a new reference each re-render)
  // This will memorize the params in a cache
  const params = useMemo(() => ({}), []);
  const searchNews = useSearchNews(params);
  const topNews = useTopNews();

  return (
    <>
      {/* Error Msg */}
      <ErrorMessage />
      {/* Skeleton and news*/}
      <NewsHomeGrid />
    </>
  );
};

export default Home;
