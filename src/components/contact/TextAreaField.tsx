interface TextAreaFieldProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ id, value, onChange, error }) => (
  <div className="mb-4">
    <label className="block text-white text-md font-bold mb-2" htmlFor={id}>
      Message:
    </label>
    <textarea
      id={id}
      rows={4}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      placeholder="Enter your message..."
      required
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default TextAreaField;
