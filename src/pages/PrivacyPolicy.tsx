import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromContactForm = location.state?.fromContactForm === "/";
  const { t } = useTranslation();

  // Estado para la barra de progreso y botón de "Ir al Inicio"
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Manejo eficiente del scroll con requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(progress);
        setShowScrollTop(scrollTop > 300);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para regresar al inicio con animación suave
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative bg-black text-gray-100 min-h-screen px-4 sm:px-8 lg:px-12 py-12">
      {/* Barra de progreso */}
      <div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-gray-200 transition-all"
        style={{ width: `${scrollProgress}%`, transition: "width 0.2s ease-out" }}
      ></div>

      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("privacy_policy.title")}
        </motion.h1>

        <motion.p
          className="mb-6 text-justify text-base sm:text-lg lg:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t("privacy_policy.description")}
        </motion.p>

        {/* Sección de política de privacidad */}
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-6">
              {t(`privacy_policy.section${index + 1}_title`)}
            </h2>
            <p className="mb-4 text-justify text-sm sm:text-base lg:text-lg">
              {t(`privacy_policy.section${index + 1}_description`)}
            </p>

            {(index === 1 || index === 2 || index === 3) && (
              <ul className="list-disc list-inside mb-4 text-sm sm:text-base lg:text-lg">
                {Array.from({ length: 4 }).map((_, subIndex) => (
                  <li key={subIndex}>{t(`privacy_policy.section${index + 1}_item${subIndex + 1}`)}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}

        <p className="mt-6 text-center text-gray-400 text-sm sm:text-base lg:text-lg">
          {t("privacy_policy.last_updated", { date: "February 2025" })}
        </p>

        {fromContactForm && (
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all text-sm sm:text-base lg:text-lg shadow-md hover:shadow-lg"
              aria-label="Go back to home page"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("privacy_policy.go_back_button")}
            </motion.button>
          </div>
        )}
      </div>

      {/* Botón flotante para ir al inicio */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white text-black p-3 sm:p-4 rounded-full shadow-lg hover:bg-gray-300 transition-all flex items-center justify-center"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="text-lg sm:text-xl" />
        </motion.button>
      )}
    </div>
  );
};

export default PrivacyPolicy;
