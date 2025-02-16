import { useNavigate } from "react-router-dom";
import NotFoundGif from "../assets/NotFound.gif";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Page Not Found</h1>
      <img
        src={NotFoundGif}
        alt="404 Not Found"
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain mb-8"
      />
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-white text-black rounded-lg text-base md:text-lg hover:bg-gray-300 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
        aria-label="Go back to home page"
      >
        <FaHome className="text-xl md:text-2xl" /> Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
