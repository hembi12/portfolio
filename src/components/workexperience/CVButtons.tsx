import { Eye, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import cvFile from "/src/assets/Hector_Martil_CV.pdf"; // ✅ Import seguro

const CVButtons = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center md:justify-start space-x-4 mt-2">
      <a
        href={cvFile}
        target="_blank"
        rel="noopener noreferrer" // ✅ Seguridad mejorada
        className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
      >
        <Eye size={16} aria-hidden="true" /> {/* ✅ Mejor accesibilidad */}
        {t("workexperience.cv_view")}
      </a>
      <a
        href={cvFile}
        download="Hector_Martil_CV.pdf"
        target="_blank" // ✅ Previene problemas con `download` en algunos navegadores
        rel="noopener noreferrer" // ✅ Seguridad mejorada
        className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
      >
        <Download size={16} aria-hidden="true" /> {/* ✅ Mejor accesibilidad */}
        {t("workexperience.cv_download")}
      </a>
    </div>
  );
};

export default CVButtons;
