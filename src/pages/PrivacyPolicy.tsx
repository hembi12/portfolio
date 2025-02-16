import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importa el hook useTranslation de react-i18next

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromContactForm = location.state?.fromContactForm === "/"; // Verifica si el usuario vino del formulario
  const { t } = useTranslation(); // Hook para obtener las traducciones

  return (
    <div className="bg-black text-gray-100 min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-4xl font-bold mb-6 text-left">
          {t("privacy_policy.title")}
        </h1>

        <p className="mb-4">{t("privacy_policy.description")}</p>

        <h2 className="text-2xl font-semibold mt-6">{t("privacy_policy.section1_title")}</h2>
        <p className="mb-4">{t("privacy_policy.section1_description")}</p>

        <h2 className="text-2xl font-semibold mt-6">{t("privacy_policy.section2_title")}</h2>
        <p className="mb-4">{t("privacy_policy.section2_description")}</p>
        <ul className="list-disc list-inside mb-4">
          <li>{t("privacy_policy.section2_item1")}</li>
          <li>{t("privacy_policy.section2_item2")}</li>
          <li>{t("privacy_policy.section2_item3")}</li>
          <li>{t("privacy_policy.section2_item4")}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">{t("privacy_policy.section3_title")}</h2>
        <p className="mb-4">{t("privacy_policy.section3_description")}</p>
        <ul className="list-disc list-inside mb-4">
          <li>{t("privacy_policy.section3_item1")}</li>
          <li>{t("privacy_policy.section3_item2")}</li>
          <li>{t("privacy_policy.section3_item3")}</li>
          <li>{t("privacy_policy.section3_item4")}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">{t("privacy_policy.section4_title")}</h2>
        <p className="mb-4">{t("privacy_policy.section4_description")}</p>
        <ul className="list-disc list-inside mb-4">
          <li>{t("privacy_policy.section4_item1")}</li>
          <li>{t("privacy_policy.section4_item2")}</li>
          <li>{t("privacy_policy.section4_item3")}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">{t("privacy_policy.section5_title")}</h2>
        <p className="mb-4">{t("privacy_policy.section5_description")}</p>

        <h2 className="text-2xl font-semibold mt-6">{t("privacy_policy.section6_title")}</h2>
        <p className="mb-4">{t("privacy_policy.section6_description")}</p>

        <h2 className="text-2xl font-semibold mt-6">{t("privacy_policy.section7_title")}</h2>
        <p className="mb-4">{t("privacy_policy.section7_description")}</p>

        <h2 className="text-2xl font-semibold mt-6">{t("privacy_policy.section8_title")}</h2>
        <p className="mb-4">{t("privacy_policy.section8_description")}</p>

        <h2 className="text-2xl font-semibold mt-6">{t("privacy_policy.section9_title")}</h2>
        <p className="mb-4">{t("privacy_policy.section9_description")}</p>
        <p className="mb-4 font-semibold">{t("privacy_policy.contact_email")}: privacy@yourdomain.com</p>

        <h2 className="text-2xl font-semibold mt-6">{t("privacy_policy.section10_title")}</h2>
        <p className="mb-4">{t("privacy_policy.section10_description")}</p>

        <p className="mt-6 text-center text-gray-200">{t("privacy_policy.last_updated", { date: "February 2025" })}</p>

        {/* Mostrar botón solo si el usuario vino del formulario */}
        {fromContactForm && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              {t("privacy_policy.go_back_button")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
