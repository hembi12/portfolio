import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  code: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, code }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-gray-200 text-lg font-semibold">{title}</h3>
        <p className="text-gray-300 text-sm mt-2">{description}</p>
        <div className="mt-4 flex space-x-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 bg-white text-black rounded-lg text-sm hover:bg-gray-300 transition flex items-center gap-2"
          >
            <FaExternalLinkAlt /> Website
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 bg-white text-black rounded-lg text-sm hover:bg-gray-300 transition flex items-center gap-2"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
