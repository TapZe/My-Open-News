import NewsCardSkeleton from "./cards/NewsCardSkeleton";
import NewsCard from "./cards/NewsCard";
import { useSelector } from "react-redux";

const NewsGrid = () => {
  const { news, isLoading } = useSelector((state) => state.newsSearch);

  // This is for defining how many copies of skeleton
  const skeletonCount = 8;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(skeletonCount)
          .fill(null)
          .map((_, index) => (
            <NewsCardSkeleton key={index} />
          ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {news?.map((article) => (
        <NewsCard key={article._id} article={article} />
      ))}
    </div>
  );
};

export default NewsGrid;
