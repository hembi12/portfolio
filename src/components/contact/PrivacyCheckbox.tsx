import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importar el hook para traducción

interface PrivacyCheckboxProps {
  accepted: boolean;
  setAccepted: (value: boolean) => void;
}

const PrivacyCheckbox: React.FC<PrivacyCheckboxProps> = ({ accepted, setAccepted }) => {
  const { t } = useTranslation(); // Inicializar el hook para traducción
  const location = useLocation();

  return (
    <div className="mb-4 flex items-center">
      <input
        type="checkbox"
        id="privacy-policy"
        className="mr-2 cursor-pointer"
        checked={accepted}
        onChange={() => setAccepted(!accepted)}
        aria-checked={accepted}
      />
      <label
        htmlFor="privacy-policy"
        className="text-white text-sm cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        {t("privacy_accept")}{" "}
        <Link
          to="/privacy-policy"
          state={{ fromContactForm: location.pathname }}
          className="text-gray-200 hover:text-gray-300 underline"
        >
          {t("privacy_policy_contact")}
        </Link>
      </label>
    </div>
  );
};

export default PrivacyCheckbox;
