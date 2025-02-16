import { EducationExperience } from "./interfaces";
import { useTranslation } from "react-i18next";

interface EducationItemProps {
  education: EducationExperience;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4">
        <img src={education.logo} alt={education.institution} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h3 className="text-lg font-semibold">
            <a href={education.link} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 hover:underline">
              {t(`education_experience.${education.institution}`)}
            </a>
          </h3>
          <p className="text-gray-300">{t(`education_experience.${education.degree}`)}</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm">{t(`education_experience.${education.duration}`)}</p>
    </div>
  );
};

export default EducationItem;
