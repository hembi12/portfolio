import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface PrivacyCheckboxProps {
  accepted: boolean;
  setAccepted: (value: boolean) => void;
}

const PrivacyCheckbox: React.FC<PrivacyCheckboxProps> = ({ accepted, setAccepted }) => {
  const { t } = useTranslation();

  useEffect(() => {
    setAccepted(false); // Asegura que la casilla esté desactivada al cargar
  }, [setAccepted]);

  return (
    <div className="mb-4 flex items-center">
      <input
        type="checkbox"
        id="privacy-policy"
        className="mr-2 cursor-pointer"
        checked={accepted}
        onChange={() => setAccepted(!accepted)}
      />
      <label htmlFor="privacy-policy" className="text-white text-sm cursor-pointer">
        {t("contact.privacy_accept")} {" "}
        <Link to="/privacy-policy" className="text-gray-100 hover:text-gray-200 underline">
          {t("contact.privacy_policy_contact")}
        </Link>
      </label>
    </div>
  );
};

export default PrivacyCheckbox;
