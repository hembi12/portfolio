import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail, Wrench, GraduationCap, Code, Globe } from "lucide-react";
import { Link } from "react-scroll";

const Dock = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = useMemo(() => [
    { id: "home", icon: <Home size={24} />, label: "Inicio" },
    { id: "about", icon: <User size={24} />, label: "Sobre mí" },
    { id: "projects", icon: <Wrench size={24} />, label: "Proyectos" },
    { id: "skills", icon: <Code size={24} />, label: "Habilidades" },
    { id: "contact", icon: <Mail size={24} />, label: "Contacto" },
    { id: "workexperience", icon: <Briefcase size={24} />, label: "Experiencia" },
    { id: "education", icon: <GraduationCap size={24} />, label: "Educación" },
  ], []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100;

    const sectionOffsets = sections.map(({ id }) => ({
      id,
      offset: document.getElementById(id)?.offsetTop || 0,
    }));

    const currentSection = sectionOffsets.find(
      (section, index) =>
        scrollPosition >= section.offset &&
        (index === sections.length - 1 || scrollPosition < sectionOffsets[index + 1].offset)
    );

    if (currentSection && currentSection.id !== activeSection) {
      setActiveSection(currentSection.id);
    }
  }, [activeSection, sections]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black border border-gray-100 bg-opacity-90 p-2 rounded-2xl shadow-xl flex">
      {sections.map(({ id, icon, label }) => (
        <Link
          key={id}
          to={id}
          smooth={true}
          duration={500}
          className={`relative flex items-center justify-center p-2 rounded-full transition-all cursor-pointer 
            ${activeSection === id ? " border-2 border-gray-100" : "text-gray-100"}`}
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.div whileHover={{ scale: 1.3 }}>{icon}</motion.div>
          {hovered === id && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }}
              exit={{ opacity: 0, y: 10, transition: { duration: 0.2, ease: "easeIn" }}}
              className="absolute bottom-14 font-semibold bg-gray-100 text-black px-3 py-1 rounded-md whitespace-nowrap text-sm"
            >
              {label}
            </motion.span>
          )}
        </Link>
      ))}

      {/* Botón para cambiar idioma */}
      <button
        onClick={() => alert("Cambio de idioma")}
        onMouseEnter={() => setHovered("language")}
        onMouseLeave={() => setHovered(null)}
        className="relative flex items-center justify-center p-2 rounded-full transition-all cursor-pointer text-gray-100 border-2 border-transparent"
      >
        <motion.div whileHover={{ scale: 1.3 }}>
          <Globe size={24} />
        </motion.div>
        {hovered === "language" && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2, ease: "easeIn" }}}
            className="absolute bottom-14 font-semibold bg-gray-100 text-black px-3 py-1 rounded-md whitespace-nowrap text-sm"
          >
            Cambiar idioma
          </motion.span>
        )}
      </button>
    </div>
  );
};

export default Dock;
