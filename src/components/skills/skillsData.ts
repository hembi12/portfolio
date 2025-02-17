import { IconType } from "react-icons";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt, FaGithub, FaNodeJs 
} from "react-icons/fa";
import { 
  SiVite, SiTypescript, SiTailwindcss, SiExpress, SiFirebase, SiVercel, SiOpenai 
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

interface Skill {
  id: string; // Nuevo campo para mejorar el rendimiento de listas
  icon: IconType;
  className?: string;
}

export const primarySkills: Skill[] = [
  { id: "html", icon: FaHtml5, className: "text-orange-500 text-3xl sm:text-4xl" },
  { id: "css", icon: FaCss3Alt, className: "text-blue-500 text-3xl sm:text-4xl" },
  { id: "javascript", icon: FaJs, className: "text-yellow-500 text-3xl sm:text-4xl" },
  { id: "bootstrap", icon: FaBootstrap, className: "text-purple-600 text-3xl sm:text-4xl" },
  { id: "react", icon: FaReact, className: "text-blue-400 text-3xl sm:text-4xl" },
  { id: "vite", icon: SiVite, className: "text-purple-500 text-3xl sm:text-4xl" },
  { id: "typescript", icon: SiTypescript, className: "text-blue-600 text-3xl sm:text-4xl" },
  { id: "tailwind", icon: SiTailwindcss, className: "text-teal-400 text-3xl sm:text-4xl" },
];

export const secondarySkills: Skill[] = [
  { id: "vscode", icon: BiLogoVisualStudio, className: "text-blue-500 text-3xl sm:text-4xl" },
  { id: "git", icon: FaGitAlt, className: "text-red-500 text-3xl sm:text-4xl" },
  { id: "github", icon: FaGithub, className: "text-white text-3xl sm:text-4xl" },
  { id: "nodejs", icon: FaNodeJs, className: "text-green-500 text-3xl sm:text-4xl" },
  { id: "express", icon: SiExpress, className: "text-white text-3xl sm:text-4xl" },
  { id: "firebase", icon: SiFirebase, className: "text-yellow-500 text-3xl sm:text-4xl" },
  { id: "vercel", icon: SiVercel, className: "text-white text-3xl sm:text-4xl" },
  { id: "openai", icon: SiOpenai, className: "text-green-400 text-3xl sm:text-4xl" },
];
