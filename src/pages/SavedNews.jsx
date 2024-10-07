// SavedNews.js
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import NewsCard from "../components/news/cards/NewsCard";

const SavedNews = () => {
  const { savedArticles } = useSelector((state) => state.persist.savedNews);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-10">
        Saved <span className="text-cyan-600">News</span>
      </h1>
      {!(savedArticles.length > 0) && (
        <div role="alert" className="alert alert-info mb-5">
          <FontAwesomeIcon icon={faCircleInfo} />
          <span>No saved articles or news yet!</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {savedArticles?.map((article) => (
          <NewsCard key={article.uri} article={article} />
        ))}
      </div>
    </>
  );
};

export default SavedNews;
