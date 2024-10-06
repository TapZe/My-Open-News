import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-grow justify-center items-center bg-error bg-gradient-to-r from-error-500 to-error-700">
        <div className="container max-w-md p-4 mx-auto text-center">
          <h1 className="text-9xl font-bold text-error-content mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-2">
            Page Not Found!
          </h2>
          <p className="text-lg text-white mb-8">
            The page you're looking for doesn't exist. Try checking the URL or
            going back to the previous page.
          </p>
          <button
            className="btn btn-primary btn-lg w-full md:w-auto mb-4"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
