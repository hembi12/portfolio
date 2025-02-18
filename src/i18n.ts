import i18n, { Resource, ResourceKey } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const sections = [
  "home",
  "about",
  "projects",
  "skills",
  "contact",
  "footer",
  "workexperience",
  "education",
  "privacypolicy"
];

// Definimos los recursos iniciales vacíos
const resources: Resource = {
  en: { translation: {} },
  es: { translation: {} },
};

// Función optimizada para cargar traducciones en paralelo
const loadResources = async () => {
  try {
    const translations = await Promise.all(
      sections.map(async (section) => {
        try {
          const data = await import(`./locales/${section}.json`);
          return { section, data };
        } catch (error) {
          console.error(`Error loading translation file: ${section}.json`, error);
          return { section, data: null };
        }
      })
    );

    for (const { section, data } of translations) {
      if (data?.en?.translation) {
        (resources.en.translation as Record<string, ResourceKey>)[section] = data.en.translation;
      }
      if (data?.es?.translation) {
        (resources.es.translation as Record<string, ResourceKey>)[section] = data.es.translation;
      }
    }
  } catch (error) {
    console.error("Error al cargar recursos de traducción:", error);
  }

  return resources;
};

// Inicializar i18n después de cargar las traducciones
loadResources().then((resources) => {
  i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      detection: {
        order: ["navigator", "localStorage", "sessionStorage", "querystring", "cookie"],
        caches: ["localStorage", "sessionStorage"],
      },
      fallbackLng: "es",
      interpolation: { escapeValue: false },
    });
});

export default i18n;
