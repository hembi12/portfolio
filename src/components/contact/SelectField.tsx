interface SelectFieldProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ id, value, onChange, error }) => (
  <div className="mb-4">
    <label className="block text-white text-md font-bold mb-2" htmlFor={id}>
      Subject:
    </label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      required
    >
      <option value="">Select a subject...</option>
      <option value="collaboration">Collaboration</option>
      <option value="feedback">Feedback</option>
      <option value="general">General Inquiry</option>
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default SelectField;
