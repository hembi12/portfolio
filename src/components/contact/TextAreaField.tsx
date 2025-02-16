import { useTranslation } from "react-i18next";

interface TextAreaFieldProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ id, value, onChange, error }) => {
  const { t } = useTranslation(); // Inicializamos el hook para traducción

  return (
    <div className="mb-4">
      <label className="block text-white text-md font-bold mb-2" htmlFor={id}>
        {t("contact_message")}
      </label>
      <textarea
        id={id}
        rows={4}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        placeholder={t("contact_message_placeholder")}
        required
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextAreaField;
