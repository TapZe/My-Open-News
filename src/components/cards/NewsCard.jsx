const NewsCard = ({ article }) => {
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
        <a
          className="card-title hover:underline"
          href={article.web_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {article.headline.main}
        </a>
        <p>{article.snippet}</p>
        <div className="card-actions justify-end">
          <a
            className="btn btn-primary"
            href={article.web_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
