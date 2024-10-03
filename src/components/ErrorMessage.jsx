import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const ErrorMessage = () => {
  const { errorMessage, isLoading } = useSelector((state) => state.newsSearch);

  if (!errorMessage || isLoading) return <></>;

  return (
    <div role="alert" className="alert alert-error mb-5">
      <FontAwesomeIcon icon={faCircleXmark} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default ErrorMessage;
