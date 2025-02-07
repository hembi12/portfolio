import { IconType } from "react-icons";

interface SkillIconProps {
  icon: IconType;
  className?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon: Icon, className }) => {
  return <Icon className={className} />;
};

export default SkillIcon;
