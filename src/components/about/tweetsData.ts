import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export const useTranslatedTweets = () => {
  const { t } = useTranslation();

  return useMemo(
    () => [
      {
        id: "catlover",
        name: "Cat Lover",
        username: "@CatLover",
        body: t("tweets.cat_lover", "My black cat, 15 years at my side: wise, independent, and affectionate in her own way. Her purr and gaze say it all."),
        img: "https://avatar.vercel.sh/catlover",
        verified: true,
        timestamp: "3:51 PM · Dec 12, 2009",
        comments: "1,108",
        retweets: "29.7K",
        likes: "301.2K",
        bookmarks: "28",
      },
      {
        id: "coderlife",
        name: "Coder Life",
        username: "@CoderLife",
        body: t("tweets.coder_life", "Being a developer means turning ideas into reality. Code, music, and many sleepless nights fixing bugs."),
        img: "https://avatar.vercel.sh/coderlife",
        verified: true,
        timestamp: "12:07 PM · Sep 27, 2024",
        comments: "2,945",
        retweets: "75.1K",
        likes: "1.19M",
        bookmarks: "14.9K",
      },
      {
        id: "familyfirst",
        name: "Family First",
        username: "@FamilyFirst",
        body: t("tweets.family_first", "Family means love, laughter, and unconditional support. Nothing beats a homemade meal shared with loved ones."),
        img: "https://avatar.vercel.sh/familyfirst",
        verified: true,
        timestamp: "9:45 AM · Dec 26, 2014",
        comments: "1,205",
        retweets: "45.9K",
        likes: "981.1K",
        bookmarks: "9.1K",
      },
      {
        id: "f1fan",
        name: "F1 Fan",
        username: "@F1Fan",
        body: t("tweets.f1_fan", "F1 is about speed, strategy, and adrenaline. Every race shows that anything can be unpredictable."),
        img: "https://avatar.vercel.sh/f1fan",
        verified: true,
        timestamp: "8:58 PM · Dec 06, 2020",
        comments: "986",
        retweets: "22.6K",
        likes: "606.4K",
        bookmarks: "4.1K",
      }
    ],
    [t] // Dependencia: se actualizará cuando cambie el idioma
  );
};
