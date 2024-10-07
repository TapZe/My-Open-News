import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../redux/reducers/newsSearchSlice";
import NewsHomeGrid from "../components/news/NewsHomeGrid";
import ErrorMessage from "../components/ErrorMessage";
import { fetchTopNews } from "../redux/reducers/newsTopSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // setting the parameters
    const params = {
      query: "",
      page: 0,
    };
    const searchNews = dispatch(fetchNews(params));
    const topNews = dispatch(fetchTopNews());
    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise "searchNews"
      searchNews.abort();
      topNews.abort();
    };
  }, []);

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
