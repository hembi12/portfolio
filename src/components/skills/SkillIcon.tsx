import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillIconProps {
  icon: IconType;
  className?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon: Icon, className }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      className="flex items-center justify-center"
    >
      <Icon className={className} />
    </motion.div>
  );
};

export default SkillIcon;
