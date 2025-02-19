import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import paypalLogo from "/src/assets/paypal.svg";
import tpLogo from "/src/assets/tp.png";
import silaLogo from "/src/assets/sila.jpg";

const useTranslatedWorkExperience = () => {
  const { t } = useTranslation();

  return useMemo(() => [
    {
      company: "PayPal",
      title: t("work_experience.jobs.paypal.title", { defaultValue: "Customer Solutions Agent" }),
      duration: t("work_experience.jobs.paypal.duration", { defaultValue: "July 2023 - Present" }),
      logo: paypalLogo
    },
    {
      company: "Teleperformance",
      title: t("work_experience.jobs.tp.title", { defaultValue: "Customer Solutions Agent - Team Lead" }),
      duration: t("work_experience.jobs.tp.duration", { defaultValue: "August 2019 - June 2023" }),
      logo: tpLogo
    },
    {
      company: "Grupo SILA",
      title: t("work_experience.jobs.sila.title", { defaultValue: "Security Monitoring Operator" }),
      duration: t("work_experience.jobs.sila.duration", { defaultValue: "November 2015 - July 2019" }),
      logo: silaLogo
    }
  ], [t]); // ✅ Solo se recalcula si `t` cambia
};

export default useTranslatedWorkExperience;
