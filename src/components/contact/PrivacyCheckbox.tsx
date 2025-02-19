import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface PrivacyCheckboxProps {
  accepted: boolean;
  setAccepted: (value: boolean) => void; // ✅ Se mantiene la firma
}

const PrivacyCheckbox: React.FC<PrivacyCheckboxProps> = ({ accepted, setAccepted }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-4 flex items-center">
      <input
        type="checkbox"
        id="privacy-policy"
        className="mr-2 cursor-pointer"
        checked={accepted}
        onChange={() => setAccepted(!accepted)} // ✅ Ahora pasamos un boolean directamente
      />
      <label htmlFor="privacy-policy" className="text-white text-sm cursor-pointer">
        {t("contact.privacy_accept")}{" "}
        <Link to="/privacy-policy" className="text-gray-100 hover:text-gray-200 underline">
          {t("contact.privacy_policy_contact")}
        </Link>
      </label>
    </div>
  );
};

export default PrivacyCheckbox;
