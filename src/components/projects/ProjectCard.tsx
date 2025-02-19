import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  code?: string;
  technologies?: React.ReactNode[]; // Nuevo prop para recibir iconos de tecnologías
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, code, technologies }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
        onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
      />

      {/* Contenedor de tecnologías (después de la imagen, antes del título) */}
      {technologies && technologies.length > 0 && (
        <div className="mt-4 flex justify-center gap-4 text-gray-400 text-2xl">
          {technologies.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
      )}

      <div className="p-4">
        <h2 className="text-gray-200 text-lg font-semibold">{title}</h2>
        <p className="text-gray-300 text-sm mt-2">{description}</p>

        {/* Botones de Website y GitHub */}
        <div className="mt-4 flex space-x-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 bg-white text-black rounded-lg text-sm hover:bg-gray-300 transition-colors flex items-center gap-2"
              aria-label={`Visit ${title} website`}
            >
              <FaExternalLinkAlt /> Website
            </a>
          )}
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 bg-white text-black rounded-lg text-sm hover:bg-gray-300 transition-colors flex items-center gap-2"
              aria-label={`View ${title} code on GitHub`}
            >
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
