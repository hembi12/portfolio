import { useTranslation } from "react-i18next";
import hmDevImage from "/src/assets/hmdev.jpg";
import birthdayImage from "/src/assets/birthday.jpg";
import landingImage from "/src/assets/landing.jpg";

export const useTranslatedProjects = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("project_portfolio_v1_title"), // Nueva clave
      description: t("project_portfolio_v1_description"), // Nueva clave
      image: hmDevImage,
      link: "https://www.hectormartil.dev/",
      code: "https://github.com/hembi12/my-portfolio",
    },
    {
      title: t("project_landing_page_title"), // Nueva clave
      description: t("project_landing_page_description"), // Nueva clave
      image: landingImage,
      link: "https://landing-page-woad-pi-82.vercel.app/",
      code: "https://github.com/hembi12/landing-page",
    },
    {
      title: t("project_birthday_invite_title"), // Nueva clave
      description: t("project_birthday_invite_description"), // Nueva clave
      image: birthdayImage,
      link: "https://rsvp-cumple.web.app/",
      code: "https://github.com/hembi12/cumplea-os_30",
    },
  ];
};
