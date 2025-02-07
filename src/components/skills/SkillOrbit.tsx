import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import SkillIcon from "./SkillIcon";
import { IconType } from "react-icons";

interface SkillOrbitProps {
  skills: { icon: IconType; className?: string }[];
  iconSize?: number;
  radius?: number;
  reverse?: boolean;
  speed?: number;
}

const SkillOrbit: React.FC<SkillOrbitProps> = ({ skills, iconSize, radius, reverse, speed }) => {
  return (
    <OrbitingCircles iconSize={iconSize} radius={radius} reverse={reverse} speed={speed}>
      {skills.map((skill, index) => (
        <SkillIcon key={index} icon={skill.icon} className={skill.className} />
      ))}
    </OrbitingCircles>
  );
};

export default SkillOrbit;
