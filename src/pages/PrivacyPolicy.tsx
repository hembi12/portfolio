import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ArrowUp, Home } from "lucide-react"; // Importamos los iconos

const SECTIONS = 10; // ✅ Define el número de secciones como constante

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  // Estado para la barra de progreso
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false); // Estado para mostrar el botón flotante

  // ✅ Optimización del scroll sin `requestAnimationFrame`
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);

    // Mostrar botón flotante cuando el usuario ha hecho scroll hacia abajo
    setShowScrollButton(scrollTop > 300);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ✅ Variantes globales para animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {t("privacypolicy.privacy_policy.title")}
        </motion.h1>

        <motion.p
          className="mb-6 text-justify text-base sm:text-lg lg:text-xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {t("privacypolicy.privacy_policy.description")}
        </motion.p>

        {/* Sección de política de privacidad */}
        {[...Array(SECTIONS)].map((_, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: index * 0.1 }}
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-6">
              {t(`privacypolicy.privacy_policy.section${index + 1}_title`, {
                defaultValue: `Section ${index + 1} Title`,
              })}
            </h2>
            <p className="mb-4 text-justify text-sm sm:text-base lg:text-lg">
              {t(`privacypolicy.privacy_policy.section${index + 1}_description`, {
                defaultValue: `Description for section ${index + 1}`,
              })}
            </p>
          </motion.div>
        ))}

        <p className="mt-6 text-center text-gray-400 text-sm sm:text-base lg:text-lg">
          {t("privacypolicy.privacy_policy.last_updated", { date: "February 2025" })}
        </p>

        {/* Botón "Go Back" con icono de Home */}
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={() => {
              if (window.history.length > 1) {
                window.history.back();
              } else {
                window.location.href = "/";
              }
            }}
            className="px-4 py-2 bg-white text-black rounded-lg text-sm hover:bg-gray-300 transition-colors flex items-center gap-2"
          >
            <Home size={18} aria-hidden="true" /> {/* ✅ Accesibilidad mejorada */}
            {t("privacypolicy.privacy_policy.go_back_button")}
          </motion.button>
        </div>
      </div>

      {/* Botón flotante para ir al inicio */}
      {showScrollButton && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-white hover:bg-gray-300 text-black p-3 rounded-full shadow-lg transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top" // ✅ Accesibilidad mejorada
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default PrivacyPolicy;
