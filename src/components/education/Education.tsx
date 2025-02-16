import EducationItem from "./EducationItem";
import CertificateItem from "./CertificateItem";
import { educationExperience, certificates } from "./data";
import { useTranslation } from "react-i18next";

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-6">
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
        {t("education_experience.title")}
      </h2>
      <div className="mt-4 space-y-4">
        {educationExperience.map((edu, index) => (
          <EducationItem key={index} education={edu} />
        ))}
      </div>
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left mt-6">
        {t("certificates.title")}
      </h2>
      <div className="mt-4 space-y-4">
        {certificates.map((cert, index) => (
          <CertificateItem key={index} certificate={cert} />
        ))}
      </div>
    </div>
  );
};

export default Education;
