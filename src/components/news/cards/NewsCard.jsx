import { useDispatch, useSelector } from "react-redux";
import {
  saveArticle,
  removeArticle,
} from "../../../redux/reducers/savedNewsSlice";
import NewsSaveBtn from "./NewsSaveBtn";

const NewsCard = ({
  article,
  showImg = true,
  showText = true,
  showLead = false,
  showBtn = true,
}) => {
  const dispatch = useDispatch();

  // Retrieve saved articles from the Redux persist store
  const { savedArticles } = useSelector((state) => state.persist.savedNews);

  // Check if the current article is already saved
  const isSaved = savedArticles?.some(
    (savedArticle) => savedArticle._id === article._id
  );

  // Toggle save/remove article
  const handleSave = () => {
    if (isSaved) {
      dispatch(removeArticle(article));
    } else {
      dispatch(saveArticle(article));
    }
  };

  // Format the publication date
  const pubDate = new Date(article.pub_date);
  const formattedPubDate = `${pubDate.getDate()}-${`0${
    pubDate.getMonth() + 1
  }`.slice(-2)}-${pubDate.getFullYear()}`;

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full shadow-xl">
        {showImg && (
          <figure>
            <img
              src={
                article.multimedia[0]
                  ? `http://www.nytimes.com/${article.multimedia[0].url}`
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlTTXqU0kuV6fgv5ncaBf_gnY39vGJa1F3A&s"
              }
              alt="..."
              className="w-full aspect-video object-cover"
            />
          </figure>
        )}
        <div className="card-body">
          <NewsSaveBtn handleSave={handleSave} isSaved={isSaved} />
          <a
            className="card-title hover:underline"
            href={article.web_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {article.headline.main}
          </a>
          {showText && <div className="text-justify">{article.abstract}</div>}
          {showLead && (
            <div className="text-justify">{article.lead_paragraph}</div>
          )}
          <p className="text-sm flex items-end text-gray-600">
            {formattedPubDate}
          </p>
          {showBtn && (
            <div className="card-actions justify-end">
              <a
                className="btn btn-primary"
                href={article.web_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
