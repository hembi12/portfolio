import { FaReact, FaNodeJs } from "react-icons/fa"; // Importa iconos
import { MdDarkMode } from "react-icons/md";
import { SiJavascript } from "react-icons/si";
import { Globe } from "lucide-react";
import { useTranslatedProjects } from "./projectsData";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const projects = useTranslatedProjects();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          technologies={[
            <FaReact key="react" className="text-blue-400" />,
            <SiJavascript key="javascript" className="text-yellow-400" />,
            <FaNodeJs key="nodejs" className="text-green-500" />,
            <MdDarkMode key="darkmode" className="text-yellow-500" />,
            <Globe key="globe" className="text-gray-200" />,
          ]}
        />
      ))}
    </div>
  );
};

export default ProjectList;
