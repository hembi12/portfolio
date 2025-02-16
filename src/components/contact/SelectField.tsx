import { useTranslation } from "react-i18next";

interface SelectFieldProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ id, value, onChange, error }) => {
  const { t } = useTranslation(); // Inicializamos el hook para traducción

  return (
    <div className="mb-4">
      <label className="block text-white text-md font-bold mb-2" htmlFor={id}>
        {t("select_label")}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        required
      >
        <option value="">{t("select_placeholder")}</option>
        <option value="collaboration">{t("select_collaboration")}</option>
        <option value="feedback">{t("select_feedback")}</option>
        <option value="general">{t("select_general")}</option>
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SelectField;
