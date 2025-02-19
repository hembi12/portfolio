import { useTranslation } from "react-i18next";
import { useMemo } from "react";

interface SelectFieldProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ id, value, onChange, error }) => {
  const { t } = useTranslation();

  // ✅ Se usa `useMemo` para evitar recalcular opciones en cada render
  const options = useMemo(() => [
    { value: "", label: t("contact.select_placeholder") },
    { value: "collaboration", label: t("contact.select_collaboration") },
    { value: "feedback", label: t("contact.select_feedback") },
    { value: "general", label: t("contact.select_general") },
  ], [t]);

  return (
    <div className="mb-4">
      <label className="block text-white text-md font-bold mb-2" htmlFor={id}>
        {t("contact.select_label")}
      </label>
      <select
        id={id}
        value={value} // ✅ Componente controlado correctamente
        onChange={onChange}
        required
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${
          error ? "border-red-500" : "border-gray-400"
        }`}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;
