import { EducationExperience, Certificate } from "./interfaces";

export const educationExperience: EducationExperience[] = [
  {
    institution: "utel", // Clave de traducción para la institución
    degree: "bachelors_it_admin", // Clave de traducción para el título
    duration: "feb_2022_present", // Clave de traducción para la duración
    logo: "/src/assets/utel.png",
    link: "http://www.utel.edu.mx/",
  },
  {
    institution: "devf",
    degree: "master_coding",
    duration: "jun_2024_present",
    logo: "/src/assets/devf.jpg",
    link: "https://devf.la/",
  },
];

export const certificates: Certificate[] = [
  {
    institution: "utel",
    title: "diploma_systems_analysis",
    duration: "completed_2025",
    logo: "/src/assets/utel.png",
    pdf: "/src/assets/010439887.DPLO.313614.DPL2025-384081.pdf",
  },
];
