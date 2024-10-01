import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../redux/reducers/newsSearchSlice";
import NewsCard from "../components/cards/NewsCard";
import NewsCardSkeleton from "../components/cards/NewsCardSkeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const { news, isLoading, errorMessage } = useSelector(
    (state) => state.newsSearch
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //fetch default data of "indonesia"
    dispatch(fetchNews());
  }, []);

  // This is for defining how many copies of skeleton
  const skeletonCount = 8;

  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-10">
          Indonesia <span className="text-cyan-600">News</span>
        </h1>
        {errorMessage && (
          <div role="alert" className="alert alert-error mb-5">
            <FontAwesomeIcon icon={faCircleXmark} />
            <span>{errorMessage}</span>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading
            ? // Display skeleton cards when loading
              Array(skeletonCount)
                .fill(null)
                .map((_, index) => <NewsCardSkeleton key={index} />)
            : // Display actual data when loaded
              news?.map((article) => (
                <NewsCard key={article._id} article={article} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Home;
