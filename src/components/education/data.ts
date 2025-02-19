import { EducationExperience, Certificate } from "./interfaces";

// ✅ Importamos imágenes y PDFs en lugar de usar rutas absolutas
import utelLogo from "/src/assets/utel.png";
import devfLogo from "/src/assets/devf.jpg";
import diplomaPDF from "/src/assets/010439887.DPLO.313614.DPL2025-384081.pdf";

export const educationExperience: EducationExperience[] = [
  {
    institution: "utel",
    degree: "bachelors_it_admin",
    duration: "feb_2022_present",
    logo: utelLogo, // ✅ Se usa la importación segura
    link: "http://www.utel.edu.mx/",
  },
  {
    institution: "devf",
    degree: "master_coding",
    duration: "jun_2024_present",
    logo: devfLogo, // ✅ Se usa la importación segura
    link: "https://devf.la/",
  },
];

export const certificates: Certificate[] = [
  {
    institution: "utel",
    title: "diploma_systems_analysis",
    duration: "completed_2025",
    logo: utelLogo, // ✅ Se usa la importación segura
    pdf: diplomaPDF, // ✅ Se usa la importación segura
  },
];
