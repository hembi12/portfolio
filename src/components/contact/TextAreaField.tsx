import { useTranslation } from "react-i18next";

interface TextAreaFieldProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ id, value, onChange, error }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <label className="block text-white text-md font-bold mb-2" htmlFor={id}>
        {t("contact_message")}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={t("contact_message_placeholder")}
        required
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${
          error ? "border-red-500" : "border-gray-400"
        }`}
        style={{ minHeight: "80px", overflow: "hidden" }} // Permite crecimiento dinámico
      />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextAreaField;
