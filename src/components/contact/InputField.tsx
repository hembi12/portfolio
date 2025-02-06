// components/contact/InputField.tsx
interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, type, placeholder }) => (
  <div className="mb-4">
    <label className="block text-white text-md font-bold mb-2" htmlFor={id}>
      {label}:
    </label>
    <input
      type={type}
      id={id}
      className="w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      placeholder={placeholder}
      required
    />
  </div>
);

export default InputField;