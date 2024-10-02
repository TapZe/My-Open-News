import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const ErrorMessage = ({ errorMessage }) => {
  if (!errorMessage) return null;

  return (
    <div role="alert" className="alert alert-error mb-5">
      <FontAwesomeIcon icon={faCircleXmark} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default ErrorMessage;
