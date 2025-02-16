import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import useActiveSection from "./useActiveSection";
import { sections } from "./sections";
import DockItem from "./DockItem";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dock = () => {
  const { t, i18n } = useTranslation();
  const [hovered, setHovered] = useState<string | null>(null);
  const activeSection = useActiveSection();

  // Cargar idioma guardado en localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("appLanguage");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Cambiar idioma y almacenarlo en localStorage
  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("appLanguage", newLang);

    toast.success(
      newLang === "es" ? "Idioma cambiado a Español" : "Language changed to English",
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
      }
    );
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black border border-gray-100 bg-opacity-90 p-2 rounded-2xl shadow-xl flex">
      {sections.map(({ id, icon: Icon }) => (
        <DockItem
          key={id}
          id={id}
          Icon={Icon}
          label={t(id)}
          active={activeSection === id}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}

      {/* Botón para cambiar idioma */}
      <button
        onClick={toggleLanguage}
        onMouseEnter={() => setHovered("language")}
        onMouseLeave={() => setHovered((prev) => (prev === "language" ? null : prev))}
        className="relative flex items-center justify-center p-2 rounded-full transition-all cursor-pointer text-gray-100 border-2 border-transparent"
        aria-label={t("changeLanguage")}
      >
        <motion.div whileHover={{ scale: 1.3 }}>
          <Globe size={24} />
        </motion.div>

        {hovered === "language" && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }}
            className="absolute bottom-14 font-semibold bg-gray-100 text-black px-3 py-1 rounded-md whitespace-nowrap text-sm"
          >
            {t("changeLanguage")}
          </motion.span>
        )}
      </button>
    </div>
  );
};

export default Dock;
