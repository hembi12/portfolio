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
          home_description:
            "Customer service expert becoming a full-stack developer. Passionate about programming who sits in front of his monitors every day to learn something new and improve.",
          profile_picture_alt: "Profile picture",
          about_title: "About Me",
          about_description: "My creativity is born from my passions:",
          tweets: {
            cat_lover: "My black cat, 15 years at my side: wise, independent and affectionate in her own way. Her purr and look say it all. 😺 ❤️",
            coder_life: "Being a dev means turning ideas into reality. Code, music, and many sleepless nights fixing bugs. 🤖 💾",
            family_first: "Family means love, laughter, and unconditional support—plus nothing beats a homemade meal shared with those who matter most. 😊 🏡",
            f1_fan: "F1 is all about speed, strategy, and adrenaline. Every race is a sign that everything can be unpredictable. 🏁 🏎️",
            in_love: "Having someone special is the best: love, support, and unique moments that make everything better. 😍 💕",
            music_addict: "Music is always there: it inspires, motivates, and accompanies every moment. Life needs a great soundtrack. 🎵 🎸",
            my_friends: "Nothing beats laughter, moments, and crazy adventures with friends. They always make life more fun. 🥳 🎮",
            tars: "Interstellar is art: science, emotions, and a soundtrack that leaves you traveling through time. 🚀 🪐",
            top_food: "Mexican food is on another level: tacos, mole, pozole and that perfect touch of spice makes it the best food in the world. 🌶️ 🇲🇽",
            wander_lust: "Traveling is the best investment: you discover, learn, and create memories that last forever. ✈️ 🏖️",
            zero_miedo: "Wrestling is pure passion. Heroes, villains, and the spectacle that always gives you chills. 💪 🔥",
          },
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
          home_description:
            "Experto en atención al cliente en proceso de convertirse en desarrollador full-stack. Apasionado por la programación que se sienta frente a sus monitores todos los días para aprender algo nuevo y mejorar.",
          profile_picture_alt: "Foto de perfil",
          about_title: "Sobre Mí",
          about_description: "Mi creatividad nace de mis pasiones:",
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
