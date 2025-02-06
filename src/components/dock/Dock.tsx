import { useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import useActiveSection from "./useActiveSection";
import { sections } from "./sections";
import DockItem from "./DockItem";

const Dock = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const activeSection = useActiveSection();

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black border border-gray-100 bg-opacity-90 p-2 rounded-2xl shadow-xl flex">
      {sections.map(({ id, icon: Icon, label }) => (
        <DockItem
          key={id}
          id={id}
          Icon={Icon}
          label={label}
          active={activeSection === id}
          hovered={hovered}
          setHovered={setHovered}
        />
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
