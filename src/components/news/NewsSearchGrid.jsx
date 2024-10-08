import NewsSkeletonCard from "./cards/NewsSkeletonCard";
import NewsCard from "./cards/NewsCard";
import { useSelector } from "react-redux";
import NewsRowCard from "./cards/NewsRowCard";

const NewsSearchGrid = () => {
  const { news, isLoading } = useSelector((state) => state.newsSearch);

  // This is for defining how many copies of skeleton
  const skeletonCount = 12;

  if (isLoading) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10">
          {Array(skeletonCount)
            .fill(null)
            .map((_, index) => (
              <NewsSkeletonCard key={index} />
            ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative overflow-x-hidden py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {news[0] && (
            <div className="lg:row-span-1">
              <NewsCard key={news[0].uri} article={news[0]} showLead={true} />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:row-span-2">
            {news?.slice(1, 5).map((article) => (
              <NewsRowCard key={article.uri} article={article} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:row-start-2 lg:row-span-2">
            {news?.slice(5, 9).map((article) => (
              <NewsRowCard key={article.uri} article={article} />
            ))}
          </div>
          {news[9] && (
            <div className="lg:row-span-1">
              <NewsCard key={news[9].uri} article={news[9]} showLead={true} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsSearchGrid;
