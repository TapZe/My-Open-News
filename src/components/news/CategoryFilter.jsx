import { useNavigate, useSearchParams } from "react-router-dom";

const sections = [
  "Business",
  "Arts",
  "Science",
  "Technology",
  "Health",
  "Sports",
  "Politics",
  "Travel",
  "Opinion",
  "Food",
];

const CategoryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sectionQuery = searchParams.get("section") || "Business";

  const handleChangeCategory = (section) => {
    if (section.trim() !== "") {
      setSearchParams({ section });
    }
  };

  return (
    <>
      <div className="flex flex-col border-2 border-dotted border-neutral mt-5 p-2 rounded-lg">
        <div>
          <h1 className="text-xl font-bold text-center">Pick your Category</h1>
        </div>
        <div className="flex justify-center gap-x-2 mt-3">
          {sections.map((section) => {
            return (
              <input
                key={section}
                type="radio"
                name="category"
                aria-label={section}
                className="btn"
                checked={sectionQuery === section}
                onChange={() => handleChangeCategory(section)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
