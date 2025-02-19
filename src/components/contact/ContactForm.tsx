import { useState, useEffect, useMemo } from "react";
import PrivacyCheckbox from "./PrivacyCheckbox";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [accepted, setAccepted] = useState(() => localStorage.getItem("privacyAccepted") === "true");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("privacyAccepted", String(accepted));
  }, [accepted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = t("contact.contact_error_name", { defaultValue: "El nombre es obligatorio." });
    if (!formData.email.trim()) {
      newErrors.email = t("contact.contact_error_email", { defaultValue: "El correo es obligatorio." });
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
      newErrors.email = t("contact.contact_error_email_invalid", { defaultValue: "El correo no es válido." });
    }
    if (!formData.subject.trim()) newErrors.subject = t("contact.contact_error_subject", { defaultValue: "El asunto es obligatorio." });
    if (!formData.message.trim()) newErrors.message = t("contact.contact_error_message", { defaultValue: "El mensaje es obligatorio." });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !accepted) return;

    if (!FORMSPREE_ENDPOINT) {
      setError(t("contact.contact_error_endpoint", { defaultValue: "Error en el formulario. Inténtalo más tarde." }));
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(t("contact.contact_error_general", { defaultValue: "Hubo un problema enviando el formulario." }));
      }
    } catch (err) {
      console.error("Error sending form:", err);
      setError(t("contact.contact_error_connection", { defaultValue: "No se pudo enviar el formulario. Verifica tu conexión." }));
    } finally {
      setLoading(false);
    }
  };

  const title = useMemo(() => t("contact.contact_title", { defaultValue: "Contáctame" }), [t]);
  const description = useMemo(() => t("contact.contact_description", { defaultValue: "Déjame un mensaje y te responderé lo antes posible." }), [t]);
  const buttonText = useMemo(() => (loading ? t("contact.contact_button_sending") : t("contact.contact_button_send")), [t, loading]);

  return (
    <>
      <Helmet>
        <title>{title} - Héctor Martil</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="mt-6">
        <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
          {title}
        </h2>
        <p className="text-gray-100 text-sm sm:text-base md:text-md lg:text-lg mt-2 text-center max-w-3xl mx-auto md:text-left md:mx-0">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto bg-black border border-white p-6 rounded-lg">
          <InputField label={t("contact.contact_name")} id="name" type="text" placeholder={t("contact.contact_name")} value={formData.name} onChange={handleInputChange} error={errors.name} />
          <InputField label={t("contact.contact_email")} id="email" type="email" placeholder={t("contact.contact_email")} value={formData.email} onChange={handleInputChange} error={errors.email} />
          <SelectField id="subject" value={formData.subject} onChange={handleInputChange} error={errors.subject} />
          <TextAreaField id="message" value={formData.message} onChange={handleInputChange} error={errors.message} />
          <PrivacyCheckbox accepted={accepted} setAccepted={setAccepted} />

          <p className="text-sm mt-2 text-center text-red-500" aria-live="polite">{error}</p>
          <p className="text-sm mt-2 text-center text-green-500" aria-live="polite">{success ? t("contact.contact_success") : ""}</p>

          <button
            type="submit"
            className={`w-full px-4 py-2 font-semibold rounded-lg transition ${
              accepted && !loading ? "bg-white text-black hover:bg-gray-300" : "bg-gray-100 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!accepted || loading}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
