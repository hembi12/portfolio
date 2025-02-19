import EducationItem from "./EducationItem";
import CertificateItem from "./CertificateItem";
import { educationExperience, certificates } from "./data";
import { useTranslation } from "react-i18next";

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-6">
      {/* Sección de Educación */}
      <section aria-labelledby="education-section">
        <h2
          id="education-section"
          className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left"
        >
          {t("education.education_experience.title")}
        </h2>
        <div className="mt-4 space-y-4">
          {educationExperience.length > 0 ? (
            educationExperience.map((edu) => (
              <EducationItem key={edu.id || edu.institution} education={edu} />
            ))
          ) : (
            <p className="text-gray-300 text-center" aria-live="polite">
              {t("no_data", { defaultValue: "No information available." })}
            </p>
          )}
        </div>
      </section>

      {/* Sección de Certificados */}
      <section aria-labelledby="certificates-section" className="mt-6">
        <h2
          id="certificates-section"
          className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left"
        >
          {t("education.certificates.title")}
        </h2>
        <div className="mt-4 space-y-4">
          {certificates.length > 0 ? (
            certificates.map((cert) => (
              <CertificateItem key={cert.id || `${cert.institution}-${cert.title}`} certificate={cert} />
            ))
          ) : (
            <p className="text-gray-300 text-center" aria-live="polite">
              {t("no_data", { defaultValue: "No information available." })}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Education;
