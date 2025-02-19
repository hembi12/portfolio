import SkillOrbit from "./SkillOrbit";
import { primarySkills, secondarySkills } from "./skillsData";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useMemo } from "react";

const Skills = () => {
  const { t } = useTranslation();

  // 🔥 Se optimiza el cálculo para evitar re-render innecesario
  const totalSkills = useMemo(
    () => (primarySkills?.length || 0) + (secondarySkills?.length || 0),
    []
  );

  return (
    <>
      <Helmet>
        <title>{t("skills.skills_title", { defaultValue: "Mis Habilidades" })} - Héctor Martil</title>
        <meta
          name="description"
          content={t("skills.skills_description", {
            defaultValue: "Aquí puedes ver las tecnologías con las que trabajo.",
          })}
        />
      </Helmet>

      <div className="mt-6">
        <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
          {t("skills.skills_title", { defaultValue: "Mis Habilidades" })}
        </h2>
        <p className="text-gray-100 text-sm sm:text-base md:text-md lg:text-lg mt-2 text-center max-w-3xl mx-auto md:text-left md:mx-0">
          {t("skills.skills_description", { defaultValue: "Aquí puedes ver las tecnologías con las que trabajo." })}
        </p>

        {totalSkills > 0 ? (
          <div
            className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
            aria-live="polite"
          >
            <span className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent pointer-events-none whitespace-pre-wrap text-center text-7xl font-semibold leading-none">
              {totalSkills}
            </span>
            {primarySkills.length > 0 && <SkillOrbit skills={primarySkills} iconSize={40} />}
            {secondarySkills.length > 0 && (
              <SkillOrbit skills={secondarySkills} iconSize={30} radius={100} reverse speed={2} />
            )}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-4">
            {t("skills_no_data", { defaultValue: "No hay habilidades disponibles." })}
          </p>
        )}
      </div>
    </>
  );
};

export default Skills;
