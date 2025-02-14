import { useTranslatedProjects } from "./projectsData";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const projects = useTranslatedProjects(); // Obtener los proyectos traducidos dinámicamente

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
