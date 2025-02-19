interface InputFieldProps {
  label: string;
  id: string;
  type: "text" | "email" | "password" | "number";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  autoComplete?: string; // Nueva prop opcional para mejorar la experiencia del usuario
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  autoComplete,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-white text-md font-bold mb-2" htmlFor={id}>
        {label}:
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error} // Indica a los lectores de pantalla si hay error
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${
          error ? "border-red-500" : "border-gray-400"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
