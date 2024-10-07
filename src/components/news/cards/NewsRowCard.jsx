import { useDispatch, useSelector } from "react-redux";
import {
  saveArticle,
  removeArticle,
} from "../../../redux/reducers/savedNewsSlice";
import NewsSaveBtn from "./NewsSaveBtn";

const NewsRowCard = ({
  article,
  showImg = true,
  showText = true,
  showLead = false,
  showBtn = false,
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
  const pubDate = new Date(article.pub_date || article.published_date);
  const formattedPubDate = `${pubDate.getDate()}-${`0${
    pubDate.getMonth() + 1
  }`.slice(-2)}-${pubDate.getFullYear()}`;

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full shadow-xl flex flex-col md:flex-row">
        {showImg && (
          <figure className="md:w-1/3 w-full">
            <img
              src={
                article.multimedia[0]
                  ? `http://www.nytimes.com/${article.multimedia[0].url.replace(
                      "https://static01.nyt.com/",
                      ""
                    )}`
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlTTXqU0kuV6fgv5ncaBf_gnY39vGJa1F3A&s"
              }
              alt="..."
              className="w-full h-full object-cover"
            />
          </figure>
        )}
        <div className="card-body md:w-2/3 flex flex-col justify-between pt-10">
          <div>
            <NewsSaveBtn handleSave={handleSave} isSaved={isSaved} />
            <a
              className="card-title hover:underline"
              href={article.web_url || article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.headline?.main || article.title}
            </a>
            {showText && <div className="text-justify">{article.abstract}</div>}
            {showLead && (
              <div className="text-justify">{article.lead_paragraph}</div>
            )}
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-600">{formattedPubDate}</p>
            {showBtn && (
              <a
                className="btn btn-primary"
                href={article.web_url || article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsRowCard;
