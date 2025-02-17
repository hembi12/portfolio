import { Marquee } from "@/components/ui/marquee";
import { TweetCard } from "@/components/about/TweetCard";
import { useTranslatedTweets } from "@/components/about/tweetsData"; // Usamos la versión traducida de los tweets
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const tweets = useTranslatedTweets() || []; // ✅ Evita posibles errores con undefined

  return (
    <div className="mt-6">
      <h2
        className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left"
        aria-label={t("about_title")} // ✅ Mejora la accesibilidad
      >
        {t("about_title")}
      </h2>
      <p
        className="text-gray-100 text-sm sm:text-base md:text-md lg:text-lg mt-2 text-center max-w-3xl mx-auto md:text-left md:mx-0"
        aria-label={t("about_description")} // ✅ Mejora la accesibilidad
      >
        {t("about_description")}
      </p>

      {tweets.length > 0 && (
        <div className="mt-6 space-y-2">
          {/* Primera fila de tweets (movimiento normal) */}
          <Marquee pauseOnHover className="[--duration:50s] flex gap-4">
            {tweets.map((tweet, index) => (
              <TweetCard key={`tweet-${index}`} {...tweet} />
            ))}
          </Marquee>

          {/* Segunda fila de tweets (movimiento inverso) */}
          <Marquee reverse pauseOnHover className="[--duration:45s] flex gap-4">
            {tweets.map((tweet, index) => (
              <TweetCard key={`tweet-${index}-reverse`} {...tweet} />
            ))}
          </Marquee>
        </div>
      )}
    </div>
  );
};

export default About;
