import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTopNews } from "../redux/reducers/newsTopSlice";

const useTopNews = (section) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const topNews = dispatch(fetchTopNews(section));

    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise "searchNews"
      topNews.abort();
    };
  }, [section]);
};

export default useTopNews;
