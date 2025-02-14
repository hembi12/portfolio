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
          home_greeting: "Hi, I'm",
          home_description: "Customer service expert becoming a full-stack developer. Passionate about programming who sits in front of his monitors every day to learn something new and improve.",
          profile_picture_alt: "Profile picture",
          about_title: "About Me",
          about_description: "My creativity is born from my passions:",
          projects_title: "My Projects",
          projects_description: "Here are some of the projects I have worked on recently.",
          project_portfolio_v1_title: "Portfolio V1",
          project_portfolio_v1_description: "I developed the first version of my portfolio website to showcase my skills, projects, and experience.",
          project_landing_page_title: "Landing Page",
          project_landing_page_description: "I developed an interactive landing page mockup focused on optimizing the presentation of key elements.",
          project_birthday_invite_title: "Birthday Invitation",
          project_birthday_invite_description: "I created an interactive invitation page for my birthday celebration with an RSVP form.",
          
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
          home_greeting: "Hola, soy",
          home_description: "Experto en atención al cliente en proceso de convertirse en desarrollador full-stack. Apasionado por la programación que se sienta frente a sus monitores todos los días para aprender algo nuevo y mejorar.",
          profile_picture_alt: "Foto de perfil",
          about_title: "Sobre Mí",
          about_description: "Mi creatividad nace de mis pasiones:",
          projects_title: "Mis Proyectos",
          projects_description: "Aquí hay algunos de los proyectos en los que he trabajado recientemente.",
          project_portfolio_v1_title: "Portafolio V1",
          project_portfolio_v1_description: "Desarrollé la primera versión de mi portafolio para mostrar mis habilidades, proyectos y experiencia.",
          project_landing_page_title: "Página de Inicio",
          project_landing_page_description: "Desarrollé un diseño interactivo de una landing page enfocada en optimizar la presentación de elementos clave.",
          project_birthday_invite_title: "Invitación de Cumpleaños",
          project_birthday_invite_description: "Creé una invitación interactiva para mi celebración de cumpleaños con un formulario de confirmación de asistencia.",
                    tweets: {
            cat_lover: "Mi gatita negra, 15 años a mi lado: sabia, independiente y cariñosa a su manera. Su ronroneo y mirada lo dicen todo. 😺❤️",
            coder_life: "Ser desarrollador significa convertir ideas en realidad. Código, música y muchas noches sin dormir arreglando bugs. 🤖 💾",
            family_first: "La familia significa amor, risas y apoyo incondicional. Nada mejor que una comida casera con los que más quieres. 😊 🏡",
            f1_fan: "La F1 es velocidad, estrategia y adrenalina. Cada carrera es una señal de que todo puede ser impredecible. 🏁 🏎️",
            in_love: "Tener a alguien especial es lo mejor: amor, apoyo y momentos únicos que hacen que todo sea mejor. 😍 💕",
            music_addict: "La música siempre está ahí: inspira, motiva y acompaña cada momento. La vida necesita una gran banda sonora. 🎵 🎸",
            my_friends: "Nada supera las risas, momentos y locas aventuras con amigos. Siempre hacen la vida más divertida. 🥳 🎮",
            tars: "Interestelar es arte: ciencia, emociones y una banda sonora que te deja viajando en el tiempo. 🚀 🪐",
            top_food: "La comida mexicana está en otro nivel: tacos, mole, pozole y ese toque perfecto de picante la hacen la mejor. 🌶️ 🇲🇽",
            wander_lust: "Viajar es la mejor inversión: descubres, aprendes y creas recuerdos que duran para siempre. ✈️ 🏖️",
            zero_miedo: "La lucha libre es pura pasión. Héroes, villanos y el espectáculo que siempre pone la piel de gallina. 💪 🔥",
          },
        },
      },
    },
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
