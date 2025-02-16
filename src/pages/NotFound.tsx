import { useNavigate } from "react-router-dom";
import NotFoundGif from "../assets/NotFound.gif";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <img 
        src={NotFoundGif} 
        alt="Not Found" 
        className="w-64 h-64 md:w-80 md:h-80 object-contain mb-6" 
      />
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-white text-black rounded-lg text-sm md:text-base hover:bg-gray-300 transition flex items-center gap-2"
      >
        <FaHome className="text-lg" /> Go Back
      </button>
    </div>
  );
};

export default NotFound;
