// components/contact/SelectField.tsx
const SelectField: React.FC = () => (
  <div className="mb-4">
    <label className="block text-white text-md font-bold mb-2" htmlFor="subject">
      Subject:
    </label>
    <select
      id="subject"
      className="w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      required
    >
      <option value="">Select a subject...</option>
      <option value="collaboration">Collaboration</option>
      <option value="feedback">Feedback</option>
      <option value="general">General Inquiry</option>
    </select>
  </div>
);

export default SelectField;