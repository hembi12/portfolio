import { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiVite, SiTypescript, SiTailwindcss, SiExpress, SiFirebase, SiVercel, SiOpenai } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

interface Skill {
  icon: IconType;
  className?: string;
}

export const primarySkills: Skill[] = [
  { icon: FaHtml5, className: "text-orange-500 text-3xl" },
  { icon: FaCss3Alt, className: "text-blue-500 text-3xl" },
  { icon: FaJs, className: "text-yellow-500 text-3xl" },
  { icon: FaBootstrap, className: "text-purple-600 text-3xl" },
  { icon: FaReact, className: "text-blue-400 text-3xl" },
  { icon: SiVite, className: "text-purple-500 text-3xl" },
  { icon: SiTypescript, className: "text-blue-600 text-3xl" },
  { icon: SiTailwindcss, className: "text-teal-400 text-3xl" },
];

export const secondarySkills: Skill[] = [
  { icon: BiLogoVisualStudio, className: "text-blue-500 text-3xl" },
  { icon: FaGitAlt, className: "text-red-500 text-3xl" },
  { icon: FaGithub, className: "text-white dark:text-white text-3xl" },
  { icon: FaNodeJs, className: "text-green-500 text-3xl" },
  { icon: SiExpress, className: "text-white text-3xl" },
  { icon: SiFirebase, className: "text-yellow-500 text-3xl" },
  { icon: SiVercel, className: "text-white text-3xl" },
  { icon: SiOpenai, className: "text-green-400 text-3xl" },
];
