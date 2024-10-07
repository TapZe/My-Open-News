import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NewsSaveBtn = ({ isSaved, handleSave }) => {
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  // function to handle button click and show tooltip with animation
  const handleClick = () => {
    const newState = !isSaved; // Determine new state after save/remove
    setTooltipMessage(newState ? "Saved!" : "Removed!");
    setShowTooltip(true);

    // Hide the tooltip after 2 seconds
    setTimeout(() => setShowTooltip(false), 2000);

    // Call the parent handleSave function to toggle the saved state
    handleSave();
  };

  return (
    <div className="group absolute top-2 right-2">
      <button className="btn btn-sm btn-secondary" onClick={handleClick}>
        <FontAwesomeIcon icon={isSaved ? solidBookmark : regularBookmark} />
      </button>
      <div
        className={`tooltip absolute right-10 bottom-1 hidden w-32 rounded-md z-40 bg-gray-700 text-white text-xs px-2 py-1 shadow-lg group-hover:block ${
          showTooltip ? "opacity-0" : "opacity-100"
        }`}
      >
        {isSaved ? `Remove This Article` : `Save This Article`}
      </div>
      <div
        className={`tooltip absolute right-10 bottom-1 w-32 rounded-md text-xs px-2 py-1 shadow-lg z-50 transition-opacity duration-300 ${
          showTooltip ? "opacity-100" : "opacity-0"
        } ${isSaved ? "bg-success text-black" : "bg-error text-black"}`}
      >
        {tooltipMessage}
      </div>
    </div>
  );
};

export default NewsSaveBtn;
