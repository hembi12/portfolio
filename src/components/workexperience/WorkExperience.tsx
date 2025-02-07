import WorkExperienceItem from "./WorkExperienceItem";
import workExperience from "./workExperienceData";
import CVButtons from "./CVButtons";

const WorkExperience = () => {
  return (
    <div className="mt-6">
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
        Work Experience
      </h2>
      <div className="mt-4 space-y-4">
        {workExperience.map((job, index) => (
          <WorkExperienceItem key={index} {...job} />
        ))}
      </div>
      <hr className="border-gray-100 my-4" />
      <CVButtons />
    </div>
  );
};

export default WorkExperience;
