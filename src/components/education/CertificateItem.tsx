import { Certificate } from "./interfaces";
import { useTranslation } from "react-i18next";

interface CertificateItemProps {
  certificate: Certificate;
}

// ✅ Función reutilizable para limpiar claves de traducción
const formatKey = (key: string) => key.replace(/\s+/g, "_").toLowerCase();

const CertificateItem: React.FC<CertificateItemProps> = ({ certificate }) => {
  const { t } = useTranslation();
  const fallbackLogo = "/src/assets/default-certificate-logo.png"; // Imagen de respaldo

  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4">
        <img
          src={certificate.logo.toString()} // ✅ Convertir `URL | string` a `string`
          alt={`Logo of ${certificate.institution} - Certificate`}
          className="w-12 h-12 rounded-full object-cover"
          onError={(e) => (e.currentTarget.src = fallbackLogo)} // ✅ Imagen de respaldo
        />
        <div>
          <h3 className="text-lg font-semibold">
            <a
              href={certificate.pdf.toString()} // ✅ Convertir `URL | string` a `string`
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400 hover:underline"
            >
              {t(`education.certificates.${formatKey(certificate.institution)}`, {
                defaultValue: certificate.institution
              })}
            </a>
          </h3>
          <p className="text-gray-300">
            {t(`education.certificates.${formatKey(certificate.title)}`, {
              defaultValue: certificate.title
            })}
          </p>
        </div>
      </div>
      <p className="text-gray-400 text-sm">
        {t(`education.certificates.${formatKey(certificate.duration)}`, {
          defaultValue: certificate.duration
        })}
      </p>
    </div>
  );
};

export default CertificateItem;
