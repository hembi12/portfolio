import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI-Powered SaaS",
    description: "An AI-driven SaaS platform that automates business workflows and enhances productivity.",
    image: "https://via.placeholder.com/400x250",
    link: "https://example.com/project1",
    code: "https://github.com/example/project1",
  },
  {
    title: "E-Commerce Platform",
    description: "A scalable and modern e-commerce platform with seamless payment integration.",
    image: "https://via.placeholder.com/400x250",
    link: "https://example.com/project2",
    code: "https://github.com/example/project2",
  },
  {
    title: "Mobile App",
    description: "A cross-platform mobile app with real-time data synchronization and offline support.",
    image: "https://via.placeholder.com/400x250",
    link: "https://example.com/project3",
    code: "https://github.com/example/project3",
  },
];

const Projects = () => {
  return (
    <div className="mt-6">
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
        My Projects
      </h2>
      <p className="text-gray-100 text-sm sm:text-base md:text-md lg:text-lg mt-2 text-center max-w-3xl mx-auto md:text-left md:mx-0">
        Here are some of the projects I have worked on recently.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-gray-200 text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 bg-white text-black rounded-lg text-sm hover:bg-gray-300 transition flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> Website
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 bg-white text-black rounded-lg text-sm hover:bg-gray-300 transition flex items-center gap-2"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
