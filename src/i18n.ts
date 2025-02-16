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
          workexperience: "Work Experience",
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
          skills_title: "Skills",
          skills_description: "Here are some of the technologies and tools I specialize in.",
          contact_title: "Contact Me",
          contact_description: "Feel free to reach out by filling out the form below.",
          contact_name: "Name",
          contact_email: "Email",
          contact_subject: "Subject",
          contact_message: "Message",
          contact_message_placeholder: "Enter your message...",
          select_label: "Subject:",
          select_placeholder: "Select a subject...",
          select_collaboration: "Collaboration",
          select_feedback: "Feedback",
          select_general: "General Inquiry",
          contact_error_name: "Name is required.",
          contact_error_email: "Invalid email format.",
          contact_error_subject: "Please select a subject.",
          contact_error_message: "Message cannot be empty.",
          contact_success: "Message sent successfully!",
          contact_button_sending: "Sending...",
          contact_button_send: "Send Message",
          contact_error_general: "Failed to send message. Please try again later.",
          contact_error_connection: "An error occurred. Please check your connection.",
          privacy_accept: "I accept the",
          privacy_policy: "Privacy Policy",
          work_experience: {
            title: "Work Experience",
            jobs: {
              paypal: {
                company: "PayPal",
                title: "Customer Solutions Agent",
                duration: "July 2023 - Present"
              },
              tp: {
                company: "Teleperformance",
                title: "Customer Solutions Agent - Team Lead",
                duration: "August 2019 - June 2023"
              },
              sila: {
                company: "Grupo SILA",
                title: "Security Monitoring Operator",
                duration: "November 2015 - July 2019"
              }
            }
          },
          tweets: {
            cat_lover: "My black cat, 15 years at my side: wise, independent, and affectionate in her own way. Her purr and gaze say it all. 😺❤️",
            coder_life: "Being a developer means turning ideas into reality. Code, music, and many sleepless nights fixing bugs. 🤖 💾",
            family_first: "Family means love, laughter, and unconditional support. Nothing beats a homemade meal shared with loved ones. 😊 🏡",
            f1_fan: "F1 is about speed, strategy, and adrenaline. Every race shows that anything can be unpredictable. 🏁 🏎️",
            in_love: "Having someone special is the best: love, support, and unique moments that make everything better. 😍 💕",
            music_addict: "Music is always there: inspiring, motivating, and accompanying every moment. Life needs a great soundtrack. 🎵 🎸",
            my_friends: "Nothing beats laughter, moments, and crazy adventures with friends. They always make life more fun. 🥳 🎮",
            tars: "Interstellar is art: science, emotions, and a soundtrack that leaves you traveling through time. 🚀 🪐",
            top_food: "Mexican food is on another level: tacos, mole, pozole, and that perfect touch of spice makes it the best. 🌶️ 🇲🇽",
            wander_lust: "Traveling is the best investment: discover, learn, and create memories that last forever. ✈️ 🏖️",
            zero_miedo: "Wrestling is pure passion. Heroes, villains, and the spectacle that always gives you chills. 💪 🔥"
          }
        }
      },
      es: {
        translation: {
          home: "Inicio",
          about: "Sobre mí",
          projects: "Proyectos",
          skills: "Habilidades",
          contact: "Contacto",
          workexperience: "Experiencia Laboral",
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
          skills_title: "Habilidades",
          skills_description: "Aquí están algunas de las tecnologías y herramientas en las que me especializo.",
          contact_title: "Contáctame",
          contact_description: "No dudes en escribirme rellenando el formulario a continuación.",
          contact_name: "Nombre",
          contact_email: "Correo electrónico",
          contact_subject: "Asunto",
          contact_message: "Mensaje",
          contact_message_placeholder: "Escribe tu mensaje...",
          select_label: "Asunto:",
          select_placeholder: "Selecciona un asunto...",
          select_collaboration: "Colaboración",
          select_feedback: "Comentarios",
          select_general: "Consulta General",
          contact_error_name: "El nombre es obligatorio.",
          contact_error_email: "Formato de correo inválido.",
          contact_error_subject: "Por favor selecciona un asunto.",
          contact_error_message: "El mensaje no puede estar vacío.",
          contact_success: "¡Mensaje enviado con éxito!",
          contact_button_sending: "Enviando...",
          contact_button_send: "Enviar Mensaje",
          contact_error_general: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
          contact_error_connection: "Ocurrió un error. Por favor verifica tu conexión.",
          privacy_accept: "Acepto la",
          privacy_policy: "Política de Privacidad",
          work_experience: {
            title: "Experiencia Laboral",
            jobs: {
              paypal: {
                company: "PayPal",
                title: "Agente de Soluciones al Cliente",
                duration: "Julio 2023 - Presente"
              },
              tp: {
                company: "Teleperformance",
                title: "Agente de Soluciones al Cliente - Líder de Equipo",
                duration: "Agosto 2019 - Junio 2023"
              },
              sila: {
                company: "Grupo SILA",
                title: "Operador de Monitoreo de Seguridad",
                duration: "Noviembre 2015 - Julio 2019"
              }
            }
          }
        }
      }
    },
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
