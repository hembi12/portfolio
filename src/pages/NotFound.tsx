import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import NotFoundGif from "../assets/NotFound.gif";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const fallbackImage = "/src/assets/default-notfound.png"; // ✅ Imagen de respaldo en caso de error

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        {t("notfound.notfound_title")}
      </h1>
      <img
        src={NotFoundGif}
        alt={t("notfound.notfound_image_alt")}
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain mb-8"
        onError={(e) => (e.currentTarget.src = fallbackImage)} // ✅ Manejo de error de imagen
      />
      <motion.button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-white text-black rounded-lg text-base md:text-lg hover:bg-gray-300 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
        aria-label={t("notfound.notfound_button_aria")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaHome className="text-xl md:text-2xl" />
        {t("notfound.notfound_button_text")}
      </motion.button>
    </div>
  );
};

export default NotFound;
