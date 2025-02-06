// components/contact/TextAreaField.tsx
const TextAreaField: React.FC = () => (
  <div className="mb-4">
    <label className="block text-white text-md font-bold mb-2" htmlFor="message">
      Message:
    </label>
    <textarea
      id="message"
      rows={4}
      className="w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      placeholder="Enter your message..."
      required
    />
  </div>
);

export default TextAreaField;