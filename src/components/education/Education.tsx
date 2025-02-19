import { useMemo } from "react";
import EducationItem from "./EducationItem";
import CertificateItem from "./CertificateItem";
import { educationExperience, certificates } from "./data";
import { useTranslation } from "react-i18next";

const Education: React.FC = () => {
  const { t } = useTranslation();

  // ✅ Traducciones optimizadas con `useMemo`
  const educationTitle = useMemo(() => t("education.education_experience.title"), [t]);
  const certificatesTitle = useMemo(() => t("education.certificates.title"), [t]);
  const noDataMessage = useMemo(() => t("no_data", { defaultValue: "No information available." }), [t]);

  return (
    <div className="mt-6">
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
        {educationTitle}
      </h2>
      <div className="mt-4 space-y-4">
        {educationExperience.length > 0 ? (
          educationExperience.map((edu) => <EducationItem key={edu.institution} education={edu} />)
        ) : (
          <p className="text-gray-300 text-center">{noDataMessage}</p>
        )}
      </div>

      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left mt-6">
        {certificatesTitle}
      </h2>
      <div className="mt-4 space-y-4">
        {certificates.length > 0 ? (
          certificates.map((cert) => <CertificateItem key={`${cert.institution}-${cert.title}`} certificate={cert} />)
        ) : (
          <p className="text-gray-300 text-center">{noDataMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Education;
