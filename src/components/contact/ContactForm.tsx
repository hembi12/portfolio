import { useState, useEffect } from "react";
import PrivacyCheckbox from "./PrivacyCheckbox";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [accepted, setAccepted] = useState<boolean>(() => {
    return localStorage.getItem("privacyAccepted") === "true";
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("privacyAccepted", String(accepted));
  }, [accepted]);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please select a subject.";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !accepted) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error("Error sending form:", err);
      setError("An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
        Contact Me
      </h2>
      <p className="text-gray-100 text-sm sm:text-base md:text-md lg:text-lg mt-2 text-center max-w-3xl mx-auto md:text-left md:mx-0">
        Feel free to reach out by filling out the form below.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto bg-black border border-white p-6 rounded-lg">
        <InputField label="Name" id="name" type="text" placeholder="Enter your name..." value={formData.name} onChange={handleInputChange} error={errors.name} />
        <InputField label="Email" id="email" type="email" placeholder="Enter your email..." value={formData.email} onChange={handleInputChange} error={errors.email} />
        <SelectField id="subject" value={formData.subject} onChange={handleInputChange} error={errors.subject} />
        <TextAreaField id="message" value={formData.message} onChange={handleInputChange} error={errors.message} />
        <PrivacyCheckbox accepted={accepted} setAccepted={setAccepted} />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-500 text-center text-sm mt-2">Message sent successfully!</p>}

        <button
          type="submit"
          className={`w-full px-4 py-2 font-semibold rounded-lg transition ${accepted && !loading ? "bg-white text-black hover:bg-gray-300" : "bg-gray-100 text-gray-500 cursor-not-allowed"
            }`}
          disabled={!accepted || loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
