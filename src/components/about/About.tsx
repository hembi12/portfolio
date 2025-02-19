import { Helmet } from "react-helmet-async";
import { Marquee } from "@/components/ui/marquee";
import { TweetCard } from "@/components/about/TweetCard";
import { useTranslatedTweets } from "@/components/about/tweetsData";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, ready } = useTranslation();
  const tweets = useTranslatedTweets(); // ✅ Hook siempre llamado en el mismo orden

  return (
    <>
      <Helmet>
        <title>{t("about.about_title")} - Héctor Martil</title>
        <meta
          name="description"
          content={t("about.about_description")} 
        />
      </Helmet>

      <div className="mt-6">
        <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
          {t("about.about_title")}
        </h2>
        <p className="text-gray-100 text-sm sm:text-base md:text-md lg:text-lg mt-2 text-center max-w-3xl mx-auto md:text-left md:mx-0">
          {t("about.about_description")}
        </p>

        {/* 🔍 Solo renderizamos los tweets si `ready` está cargado */}
        {ready && tweets.length > 0 && (
          <div className="mt-6 space-y-2">
            <Marquee pauseOnHover className="[--duration:50s] flex gap-4">
              {tweets.map((tweet, index) => (
                <TweetCard key={`tweet-${index}`} {...tweet} />
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:45s] flex gap-4">
              {tweets.map((tweet, index) => (
                <TweetCard key={`tweet-${index}-reverse`} {...tweet} />
              ))}
            </Marquee>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
