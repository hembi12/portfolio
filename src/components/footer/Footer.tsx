import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-6 mt-12 mb-12" lang={i18n.language} aria-labelledby="footer-title">
      <div className="w-full border-t border-gray-100 mb-4"></div>

      <div className="container max-w-screen-lg mx-auto px-4 flex flex-col items-center text-center">
        <small id="footer-title" className="text-sm">
          <span aria-hidden="true">&copy; {currentYear} </span>
          {t("footer.all_rights_reserved")}
        </small>

        <nav className="flex space-x-4 mt-4 sm:mt-2" aria-label="Redes sociales">
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
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
