import { Eye, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import cvFile from "/src/assets/Hector_Martil_CV.pdf"; // Importar el archivo PDF

const CVButtons = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center md:justify-start space-x-4 mt-2">
      <a
        href={cvFile}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("cv_view")}
        className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
      >
        <Eye size={16} /> {t("cv_view", "View CV")}
      </a>
      <a
        href={cvFile}
        download
        aria-label={t("cv_download")}
        className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
      >
        <Download size={16} /> {t("cv_download", "Download CV")}
      </a>
    </div>
  );
};

export default CVButtons;
