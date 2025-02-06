import { Link, useLocation } from "react-router-dom";

interface PrivacyCheckboxProps {
  accepted: boolean;
  setAccepted: (value: boolean) => void;
}

const PrivacyCheckbox: React.FC<PrivacyCheckboxProps> = ({ accepted, setAccepted }) => {
  const location = useLocation(); // Para obtener la URL actual

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
        I accept the{" "}
        <Link
          to="/privacy-policy"
          state={{ fromContactForm: location.pathname }} // Enviar la ubicación actual
          className="text-gray-200 hover:text-gray-300 underline"
        >
          Privacy Policy
        </Link>
      </label>
    </div>
  );
};

export default PrivacyCheckbox;
