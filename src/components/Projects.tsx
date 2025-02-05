import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import hmDevImage from "/src/assets/hmdev.jpg";
import birthdayImage from "/src/assets/birthday.jpg";
import landingImage from "/src/assets/landing.jpg";

const projects = [
  {
    title: "Portfolio V1",
    description: "I developed the first version of my portfolio website to showcase my skills, projects, and experience.",
    image: hmDevImage,
    link: "https://www.hectormartil.dev/",
    code: "https://github.com/hembi12/my-portfolio",
  },
  {
    title: "Landing Page",
    description: "I developed an interactive landing page mockup focused on optimizing the presentation of key elements.",
    image: landingImage,
    link: "https://landing-page-woad-pi-82.vercel.app/",
    code: "https://github.com/hembi12/landing-page",
  },
  {
    title: "Birthday Invitation",
    description: "I created an interactive invitation page for my birthday celebration with an RSVP form.",
    image: birthdayImage,
    link: "https://rsvp-cumple.web.app/",
    code: "https://github.com/hembi12/cumplea-os_30",
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
