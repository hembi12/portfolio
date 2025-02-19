import { useTranslation } from "react-i18next";
import { useEffect, useRef, useMemo } from "react";

interface TextAreaFieldProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ id, value, onChange, error }) => {
  const { t } = useTranslation();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ✅ Traducciones optimizadas con `useMemo`
  const labelText = useMemo(() => t("contact.contact_message"), [t]);
  const placeholderText = useMemo(() => t("contact.contact_message_placeholder"), [t]);

  // ✅ Ajustar altura dinámica del textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]); // Se ejecuta cada vez que el valor cambia

  return (
    <div className="mb-4">
      <label className="block text-white text-md font-bold mb-2" htmlFor={id}>
        {labelText}
      </label>
      <textarea
        id={id}
        ref={textareaRef} // ✅ Referencia para ajustar altura
        value={value}
        onChange={onChange}
        placeholder={placeholderText}
        required
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${
          error ? "border-red-500" : "border-gray-400"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-1" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextAreaField;
