import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About Me",
          projects: "Projects",
          skills: "Skills",
          contact: "Contact",
          workexperience: "Experience",
          education: "Education",
          changeLanguage: "Change Language",
        },
      },
      es: {
        translation: {
          home: "Inicio",
          about: "Sobre mí",
          projects: "Proyectos",
          skills: "Habilidades",
          contact: "Contacto",
          workexperience: "Experiencia",
          education: "Educación",
          changeLanguage: "Cambiar idioma",
        },
      },
    },
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
