const NewsSkeletonCard = () => {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <div className="skeleton h-48 w-full"></div>
      </figure>
      <div className="card-body">
        <button className="btn btn-secondary skeleton w-4 h-4 absolute top-2 right-2"></button>
        <h2 className="card-title skeleton h-6 w-48"></h2>
        <p className="skeleton h-4 w-64"></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary skeleton h-8 w-24"></button>
        </div>
      </div>
    </div>
  );
};

export default NewsSkeletonCard;
