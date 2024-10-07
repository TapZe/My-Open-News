import NewsCardSkeleton from "./cards/NewsCardSkeleton";
import NewsCard from "./cards/NewsCard";
import { useSelector } from "react-redux";

const NewsSearchGrid = () => {
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
    <>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
        {news[0] && (
          <div className="lg:row-span-1">
            <NewsCard key={news[0]._id} article={news[0]} showLead={true} />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:row-span-2">
          {news?.slice(1, 5).map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:row-start-2 lg:row-span-2">
          {news?.slice(5, 9).map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </div>
        {news[9] && (
          <div className="lg:row-span-1">
            <NewsCard key={news[9]._id} article={news[9]} showLead={true} />
          </div>
        )}
      </div>
    </>
  );
};

export default NewsSearchGrid;
