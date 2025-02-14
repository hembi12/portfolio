import ProjectList from "./ProjectList";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation(); // Hook para traducción

  return (
    <div className="mt-6">
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
        {t("projects_title")} {/* Traducción del título */}
      </h2>
      <p className="text-gray-100 text-sm sm:text-base md:text-md lg:text-lg mt-2 text-center max-w-3xl mx-auto md:text-left md:mx-0">
        {t("projects_description")} {/* Traducción de la descripción */}
      </p>
      <ProjectList />
    </div>
  );
};

export default Projects;
