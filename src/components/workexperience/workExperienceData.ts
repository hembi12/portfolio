import { useTranslation } from "react-i18next";
import paypalLogo from "/src/assets/paypal.svg";
import tpLogo from "/src/assets/tp.png";
import silaLogo from "/src/assets/sila.jpg";

const useTranslatedWorkExperience = () => {
  const { t } = useTranslation();

  return [
    {
      company: "PayPal",
      title: t("work_experience.jobs.paypal.title", "Customer Solutions Agent"),
      duration: t("work_experience.jobs.paypal.duration", "July 2023 - Present"),
      logo: paypalLogo
    },
    {
      company: "Teleperformance",
      title: t("work_experience.jobs.tp.title", "Customer Solutions Agent - Team Lead"),
      duration: t("work_experience.jobs.tp.duration", "August 2019 - June 2023"),
      logo: tpLogo
    },
    {
      company: "Grupo SILA",
      title: t("work_experience.jobs.sila.title", "Security Monitoring Operator"),
      duration: t("work_experience.jobs.sila.duration", "November 2015 - July 2019"),
      logo: silaLogo
    }
  ];
};

export default useTranslatedWorkExperience;
