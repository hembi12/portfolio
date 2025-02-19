import useTranslatedWorkExperience from "./workExperienceData";
import WorkExperienceItem from "./WorkExperienceItem";
import CVButtons from "./CVButtons";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

const WorkExperience = () => {
  const { t } = useTranslation();
  const workExperience = useTranslatedWorkExperience(); // ✅ Llamar el hook en el nivel superior

  // ✅ Traducciones optimizadas con `useMemo`
  const title = useMemo(() => t("workexperience.work_experience.title"), [t]);
  const noDataMessage = useMemo(() => t("work_experience.no_data"), [t]);

  return (
    <div className="mt-6">
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
        {title}
      </h2>
      <div className="mt-4 space-y-4">
        {workExperience.length > 0 ? (
          workExperience.map((job, index) => (
            <WorkExperienceItem key={`${job.company}-${index}`} {...job} /> // ✅ Evita claves duplicadas
          ))
        ) : (
          <p className="text-gray-300 text-center">{noDataMessage}</p>
        )}
      </div>
      <hr className="border-gray-100 my-4" />
      <CVButtons />
    </div>
  );
};

export default WorkExperience;
