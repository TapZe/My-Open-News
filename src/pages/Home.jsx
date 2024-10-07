import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, setPage } from "../redux/reducers/newsSearchSlice";
import NewsHomeGrid from "../components/news/NewsHomeGrid";

const Home = () => {
  const { page } = useSelector((state) => state.newsSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    // setting the parameters
    const params = {
      query: "",
      page,
    };
    const promise = dispatch(fetchNews(params));
    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise
      promise.abort();
    };
  }, [page]);

  // Reset page when unmounted only
  useEffect(() => {
    return () => {
      dispatch(setPage(0));
    };
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-10">
        Welcome to <span className="text-cyan-600">O</span>pen
        <span className="text-cyan-600">News</span>
      </h1>
      <NewsHomeGrid />
    </>
  );
};

export default Home;
