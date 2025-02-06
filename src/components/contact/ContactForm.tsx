import { useState, useEffect } from "react";
import PrivacyCheckbox from "./PrivacyCheckbox";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";

const ContactForm: React.FC = () => {
  const [accepted, setAccepted] = useState<boolean>(() => {
    return localStorage.getItem("privacyAccepted") === "true";
  });

  useEffect(() => {
    localStorage.setItem("privacyAccepted", String(accepted));
  }, [accepted]);

  return (
    <div className="mt-6">
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
        Contact Me
      </h2>
      <p className="text-gray-100 text-sm sm:text-base md:text-md lg:text-lg mt-2 text-center max-w-3xl mx-auto md:text-left md:mx-0">
        Feel free to reach out by filling out the form below.
      </p>
      <form className="mt-6 max-w-md mx-auto bg-black border border-white p-6 rounded-lg">
        <InputField label="Name" id="name" type="text" placeholder="Enter your name..." />
        <InputField label="Email" id="email" type="email" placeholder="Enter your email..." />
        <SelectField />
        <TextAreaField />
        <PrivacyCheckbox accepted={accepted} setAccepted={setAccepted} />
        <button
          type="submit"
          className={`w-full px-4 py-2 font-semibold rounded-lg transition ${
            accepted ? "bg-white text-black hover:bg-gray-300" : "bg-gray-100 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!accepted}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
