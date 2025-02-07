import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface DockItemProps {
  id: string;
  Icon: React.ElementType;
  label: string; // Asegúrate de que label es string
  active: boolean;
  hovered: string | null;
  setHovered: (id: string | null) => void;
}

const DockItem: React.FC<DockItemProps> = ({ id, Icon, label, active, hovered, setHovered }) => {
  return (
    <Link
      to={id}
      smooth={true}
      duration={500}
      className={`relative flex items-center justify-center p-2 rounded-full transition-all cursor-pointer 
      ${active ? "border-2 border-gray-100" : "text-gray-100"}`}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      <motion.div whileHover={{ scale: 1.3 }}>
        <Icon size={24} />
      </motion.div>
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
  );
};

export default DockItem;
