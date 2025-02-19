import ProjectList from "./ProjectList";
import { useTranslation } from "react-i18next";
import { useMemo } from "react"; // ✅ Importamos useMemo para optimización

const Projects = () => {
  const { t } = useTranslation();

  // ✅ Traducciones optimizadas con useMemo para evitar renders innecesarios
  const title = useMemo(() => t("projects_title", { defaultValue: "Mis Proyectos" }), [t]);
  const description = useMemo(
    () => t("projects_description", { defaultValue: "Aquí puedes ver algunos de mis proyectos recientes." }),
    [t]
  );

  return (
    <div className="mt-6">
      <h2
        className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left"
        aria-label={title} // ✅ Mejora la accesibilidad
      >
        {title}
      </h2>
      <p className="text-gray-100 text-sm sm:text-base md:text-md lg:text-lg mt-2 text-center max-w-3xl mx-auto md:text-left md:mx-0">
        {description}
      </p>
      <ProjectList />
    </div>
  );
};

export default Projects;
