import { EducationExperience } from "./interfaces";
import { useTranslation } from "react-i18next";

interface EducationItemProps {
  education: EducationExperience;
}

// ✅ Función reutilizable para limpiar claves de traducción
const formatKey = (key: string) => key.replace(/\s+/g, "_").toLowerCase();

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  const { t } = useTranslation();
  const fallbackLogo = "/src/assets/default-education-logo.png"; // Imagen de respaldo

  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4">
        <img
          src={education.logo.toString()} // ✅ Convertir `URL | string` a `string`
          alt={`Logo of ${education.institution} - Education`}
          className="w-12 h-12 rounded-full object-cover"
          onError={(e) => (e.currentTarget.src = fallbackLogo)} // ✅ Imagen de respaldo
        />
        <div>
          <h3 className="text-lg font-semibold">
            <a
              href={education.link.toString()} // ✅ Convertir `URL | string` a `string`
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400 hover:underline"
            >
              {t(`education.education_experience.${formatKey(education.institution)}`, {
                defaultValue: education.institution
              })}
            </a>
          </h3>
          <p className="text-gray-300">
            {t(`education.education_experience.${formatKey(education.degree)}`, {
              defaultValue: education.degree
            })}
          </p>
        </div>
      </div>
      <p className="text-gray-400 text-sm">
        {t(`education.education_experience.${formatKey(education.duration)}`, {
          defaultValue: education.duration
        })}
      </p>
    </div>
  );
};

export default EducationItem;
