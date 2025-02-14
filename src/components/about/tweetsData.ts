import { useTranslation } from "react-i18next";

export const useTranslatedTweets = () => {
  const { t } = useTranslation();

  return [
    {
      name: "Cat Lover",
      username: "@CatLover",
      body: t("tweets.cat_lover"),
      img: "https://avatar.vercel.sh/catlover",
      verified: true,
      timestamp: "3:51 PM · Dec 12, 2009",
      comments: "1,108",
      retweets: "29.7K",
      likes: "301.2K",
      bookmarks: "28",
    },
    {
      name: "Coder Life",
      username: "@CoderLife",
      body: t("tweets.coder_life"),
      img: "https://avatar.vercel.sh/coderlife",
      verified: true,
      timestamp: "12:07 PM · Sep 27, 2024",
      comments: "2,945",
      retweets: "75.1K",
      likes: "1.19M",
      bookmarks: "14.9K",
    },
    {
      name: "Family First",
      username: "@FamilyFirst",
      body: t("tweets.family_first"),
      img: "https://avatar.vercel.sh/familyfirst",
      verified: true,
      timestamp: "9:45 AM · Dec 26, 2014",
      comments: "1,205",
      retweets: "45.9K",
      likes: "981.1K",
      bookmarks: "9.1K",
    },
    {
      name: "F1 Fan",
      username: "@F1Fan",
      body: t("tweets.f1_fan"),
      img: "https://avatar.vercel.sh/f1fan",
      verified: true,
      timestamp: "8:58 PM · Dec 06, 2020",
      comments: "986",
      retweets: "22.6K",
      likes: "606.4K",
      bookmarks: "4.1K",
    },
  ];
};
