import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiVite, SiTypescript, SiTailwindcss, SiExpress, SiFirebase, SiVercel, SiOpenai } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const Skills = () => {
    return (
        <div className="mt-6">
            <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                Skills
            </h2>
            <p className="text-gray-100 text-sm sm:text-base md:text-md lg:text-lg mt-2 text-center max-w-3xl mx-auto md:text-left md:mx-0">
                Here are some of the technologies and tools I specialize in.
            </p>
            <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
                <span className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent pointer-events-none whitespace-pre-wrap text-center text-7xl font-semibold leading-none">
                    16
                </span>
                <OrbitingCircles iconSize={40}>
                    <FaHtml5 className="text-orange-500 text-3xl" />
                    <FaCss3Alt className="text-blue-500 text-3xl" />
                    <FaJs className="text-yellow-500 text-3xl" />
                    <FaBootstrap className="text-purple-600 text-3xl" />
                    <FaReact className="text-blue-400 text-3xl" />
                    <SiVite className="text-purple-500 text-3xl" />
                    <SiTypescript className="text-blue-600 text-3xl" />
                    <SiTailwindcss className="text-teal-400 text-3xl" />
                </OrbitingCircles>
                <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                    <BiLogoVisualStudio className="text-blue-500 text-3xl" />
                    <FaGitAlt className="text-red-500 text-3xl" />
                    <FaGithub className="text-white dark:text-white text-3xl" />
                    <FaNodeJs className="text-green-500 text-3xl" />
                    <SiExpress className="text-white text-3xl" />
                    <SiFirebase className="text-yellow-500 text-3xl" />
                    <SiVercel className="text-white text-3xl" />
                    <SiOpenai className="text-green-400 text-3xl" />
                </OrbitingCircles>
            </div>
        </div>
    );
};

export default Skills;
