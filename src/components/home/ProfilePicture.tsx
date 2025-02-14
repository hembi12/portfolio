import { useTranslation } from "react-i18next";
import profilePic from "/src/assets/profile-picture.png";

interface ProfilePictureProps {
  alt?: string;
  size?: "small" | "medium" | "large";
}

const sizeClasses = {
  small: "w-24 h-24",
  medium: "w-32 h-32",
  large: "w-40 h-40",
};

const ProfilePicture: React.FC<ProfilePictureProps> = ({ alt, size = "medium" }) => {
  const { t } = useTranslation();
  return (
    <img
      src={profilePic}
      alt={alt || t("profile_picture_alt")} // Traducción del alt
      className={`${sizeClasses[size]} rounded-full object-cover`}
    />
  );
};

export default ProfilePicture;
