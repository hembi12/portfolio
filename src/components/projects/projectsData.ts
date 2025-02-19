import { useTranslation } from "react-i18next";
import { useMemo } from "react"; // ✅ Se usa useMemo para optimización
import hmDevImage from "/src/assets/hmdev.jpg";
import birthdayImage from "/src/assets/birthday.jpg";
import landingImage from "/src/assets/landing.jpg";

export const useTranslatedProjects = () => {
  const { t } = useTranslation();

  // ✅ Se usa `useMemo` para evitar recreaciones innecesarias
  return useMemo(() => [
    {
      title: t("projects.project_portfolio_v1_title"),
      description: t("projects.project_portfolio_v1_description"),
      image: hmDevImage,
      link: "https://www.hectormartil.dev/",
      code: "https://github.com/hembi12/my-portfolio",
    },
    {
      title: t("projects.project_landing_page_title"),
      description: t("projects.project_landing_page_description"),
      image: landingImage,
      link: "https://landing-page-woad-pi-82.vercel.app/",
      code: "https://github.com/hembi12/landing-page",
    },
    {
      title: t("projects.project_birthday_invite_title"),
      description: t("projects.project_birthday_invite_description"),
      image: birthdayImage,
      link: "https://rsvp-cumple.web.app/",
      code: "https://github.com/hembi12/cumplea-os_30",
    },
  ], [t]); // ✅ Solo se recalcula si `t` cambia
};
