import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-6 mt-12 mb-12">
      <div className="w-full border-t border-gray-100 mb-4"></div>
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <p className="text-sm">
          &copy; {currentYear} Héctor Martil. {t("footer_all_rights_reserved")}
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-2">
          <a
            href="https://github.com/hembi12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-gray-300 hover:underline"
            aria-label="GitHub de Héctor Martil"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hectormartil/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-gray-300 hover:underline"
            aria-label="LinkedIn de Héctor Martil"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
