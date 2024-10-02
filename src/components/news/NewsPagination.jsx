const NewsPagination = ({ page, handlePageChange, totalPages }) => {
  // Function to calculate which pages to show in pagination
  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    let startPage = Math.max(0, page - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow);

    // Adjust startPage if at the end
    if (endPage - startPage < maxPagesToShow) {
      startPage = Math.max(0, endPage - maxPagesToShow);
    }

    return Array.from(
      { length: endPage - startPage },
      (_, idx) => startPage + idx
    );
  };

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
