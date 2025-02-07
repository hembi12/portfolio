import SkillOrbit from "./SkillOrbit";
import { primarySkills, secondarySkills } from "./skillsData";

const Skills = () => {
  return (
    <div className="mt-6">
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
        Skills
      </h2>
      <p className="text-gray-100 text-sm sm:text-base md:text-md lg:text-lg mt-2 text-center max-w-3xl mx-auto md:text-left md:mx-0">
        Here are some of the technologies and tools I specialize in.
      </p>
      <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <span className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent pointer-events-none whitespace-pre-wrap text-center text-7xl font-semibold leading-none">
          {primarySkills.length + secondarySkills.length}
        </span>
        <SkillOrbit skills={primarySkills} iconSize={40} />
        <SkillOrbit skills={secondarySkills} iconSize={30} radius={100} reverse speed={2} />
      </div>
    </div>
  );
};

export default Skills;
