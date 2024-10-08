import { useSelector } from "react-redux";
import NewsCard from "./cards/NewsCard";
import NewsSkeletonCard from "./cards/NewsSkeletonCard";
import NewsRowCard from "./cards/NewsRowCard";

const NewsHomeGrid = () => {
  const { news: searchNews, isLoading: searchLoading } = useSelector(
    (state) => state.newsSearch
  );
  const { news: topNews, isLoading: topLoading } = useSelector(
    (state) => state.newsTop
  );

  const isLoading = searchLoading || topLoading;

  if (isLoading) {
    return (
      <>
        <div className="relative overflow-x-hidden py-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-x-10 gap-y-14">
            {/* Top news */}
            <div className="lg:col-span-6">
              {Array(1)
                .fill(null)
                .map((_, index) => (
                  <NewsSkeletonCard key={index} />
                ))}
            </div>
            <div className="grid grid-cols-1 gap-6 lg:row-span-2 lg:col-span-4">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <NewsSkeletonCard key={index} />
                ))}
            </div>
            {/* Search news query="" */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-5 lg:col-start-6">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <NewsSkeletonCard key={index} />
                ))}
            </div>
            {/* Top News */}
            <div className="grid grid-cols-1 gap-6 lg:row-start-2 lg:row-span-2 lg:col-span-5 lg:col-start-1">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <NewsSkeletonCard key={index} />
                ))}
            </div>
            {/* Search news query="" */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-5">
              {Array(2)
                .fill(null)
                .map((_, index) => (
                  <NewsSkeletonCard key={index} />
                ))}
            </div>
            {/* Top News */}
            <div className="lg:col-span-5">
              {Array(1)
                .fill(null)
                .map((_, index) => (
                  <NewsSkeletonCard key={index} />
                ))}
            </div>
            {/* Search news query="" */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:col-span-10">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <NewsSkeletonCard key={index} />
                ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative overflow-x-hidden py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-x-10 gap-y-14">
          {/* Top news */}
          {topNews[0] && (
            <div className="lg:col-span-6">
              <NewsCard
                key={topNews[0].uri}
                article={topNews[0]}
                showLead={true}
              />
            </div>
          )}
          <div className="grid grid-cols-1 gap-6 lg:row-span-2 lg:col-span-4">
            {topNews?.slice(1, 5).map((article) => (
              <NewsRowCard key={article.uri} article={article} />
            ))}
          </div>
          {/* Search news query="" */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-5 lg:col-start-6">
            {searchNews?.slice(0, 4).map((article) => (
              <NewsCard key={article.uri} article={article} />
            ))}
          </div>
          {/* Top News */}
          <div className="grid grid-cols-1 gap-6 lg:row-start-2 lg:row-span-2 lg:col-span-5 lg:col-start-1">
            {topNews?.slice(5, 9).map((article) => (
              <NewsRowCard key={article.uri} article={article} showBtn={true} />
            ))}
          </div>
          {/* Search news query="" */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-5">
            {searchNews?.slice(4, 6).map((article) => (
              <NewsCard key={article.uri} article={article} />
            ))}
          </div>
          {/* Top News */}
          {topNews[9] && (
            <div className="lg:col-span-5">
              <NewsCard
                key={topNews[9].uri}
                article={topNews[9]}
                showLead={true}
              />
            </div>
          )}
          {/* Search news query="" */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:col-span-10">
            {searchNews?.slice(6, 10).map((article) => (
              <NewsCard key={article.uri} article={article} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHomeGrid;
