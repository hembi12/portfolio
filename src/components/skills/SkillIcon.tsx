import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillIconProps {
  icon: IconType;
  className?: string;
  label?: string; // Nueva prop para accesibilidad
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon: Icon, className = "", label }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }} // Mejora la animación
      className="flex items-center justify-center"
    >
      <Icon className={className} aria-label={label} />
    </motion.div>
  );
};

export default SkillIcon;
