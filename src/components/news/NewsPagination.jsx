import { useSelector } from "react-redux";

const NewsPagination = ({ page, handlePageChange }) => {
  const { totalPages } = useSelector((state) => state.newsSearch);

  // Function to calculate which pages to show in pagination
  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    let startPage = Math.max(0, page - Math.floor(maxPagesToShow / 2)); // 5000 - 2 = 4998 /// max(0, 4998) /diambil/=4998
    let endPage = Math.min(totalPages, startPage + maxPagesToShow); // 4998 + 5 = 5003 /// min(5000, 5003) /diambil/= 5000
    // (namun perlu 4996, 4997, 4998, 4999, 5000)

    // Adjust startPage if at the end
    if (endPage - startPage < maxPagesToShow) {
      // apakah sampai 5?
      startPage = Math.max(0, endPage - maxPagesToShow); // perlu 4996 sampai 5000
    }

    // Generate a sequence of numbers
    // Since the array is initialized with `undefined` on each position,
    // the value of `v` below will be `undefined`
    /* Array.from({ length: 5 }, (v, i) => i); */
    // [0, 1, 2, 3, 4]
    return Array.from(
      { length: endPage - startPage },
      (_, idx) => startPage + idx
    );
  };

  if (!(totalPages > 0)) return <></>;

  return (
    <>
      <div className="join flex justify-center mt-10">
        <button
          className={`join-item btn ${page === 0 ? "btn-disabled" : ""}`}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>

        {/* Render Page Numbers */}
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            className={`join-item btn ${
              pageNumber === page ? "btn-active" : ""
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber + 1}
          </button>
        ))}

        <button
          className={`join-item btn ${
            page === totalPages - 1 ? "btn-disabled" : ""
          }`}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default NewsPagination;
