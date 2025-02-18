import { WordRotate } from "@/components/ui/word-rotate";
import { useTranslation } from "react-i18next";

const Introduction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center md:items-start h-full">
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        <span className="flex items-center justify-center md:justify-start gap-2">
          {t("home_greeting")}{" "}
          <span className="relative">
            <WordRotate words={["Héctor","Martil"]} className="inline-flex" />
          </span>{" "}
          <span aria-hidden="true" role="img" className="ml-1">
            👋
          </span>
        </span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 max-w-2xl mx-auto md:mx-0">
        {t("home_description")}
      </p>
    </div>
  );
};

export default Introduction;
