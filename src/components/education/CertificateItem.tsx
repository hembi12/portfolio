// CertificateItem.tsx
import { Certificate } from "./interfaces";

interface CertificateItemProps {
  certificate: Certificate;
}

const CertificateItem: React.FC<CertificateItemProps> = ({ certificate }) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4">
        <img src={certificate.logo} alt={certificate.institution} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h3 className="text-lg font-semibold">
            <a href={certificate.pdf} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 hover:underline">
              {certificate.institution}
            </a>
          </h3>
          <p className="text-gray-300">{certificate.title}</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm">{certificate.duration}</p>
    </div>
  );
};

export default CertificateItem;