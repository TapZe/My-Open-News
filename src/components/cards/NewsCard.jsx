import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  saveArticle,
  removeArticle,
} from "../../redux/reducers/savedNewsSlice";

const NewsCard = ({ article }) => {
  const dispatch = useDispatch();

  // Retrieve saved articles from the Redux store
  const { savedArticles } = useSelector((state) => state.persist);

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
    <div className="card bg-base-100 w-80 shadow-xl">
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
      <div className="card-body">
        <div className="group absolute top-2 right-2">
          <button className="btn btn-sm btn-secondary" onClick={handleSave}>
            <FontAwesomeIcon icon={isSaved ? solidBookmark : regularBookmark} />
          </button>
          <div className="tooltip absolute left-1/2 bottom-full mb-2 hidden w-32 -translate-x-1/2 rounded-md bg-gray-700 text-white text-xs px-2 py-1 shadow-lg group-hover:block">
            {isSaved ? `Remove News` : `Save News`}
          </div>
        </div>
        <a
          className="card-title hover:underline"
          href={article.web_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {article.headline.main}
        </a>
        <p className="text-justify">{article.snippet}</p>
        <p className="text-sm flex items-end text-gray-600">
          {formattedPubDate}
        </p>
        <div className="card-actions justify-end">
          <a
            className="btn btn-primary"
            href={article.web_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read News
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
