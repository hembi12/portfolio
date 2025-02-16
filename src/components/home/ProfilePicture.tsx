import { useTranslation } from "react-i18next";
import profilePic from "@/assets/profile-picture.png"; // ✅ Importación correcta

interface ProfilePictureProps {
  alt?: string;
  size?: "small" | "medium" | "large";
}

const sizeClasses: Record<"small" | "medium" | "large", string> = {
  small: "w-24 h-24",
  medium: "w-32 h-32",
  large: "w-40 h-40",
};

const ProfilePicture: React.FC<ProfilePictureProps> = ({ alt, size = "medium" }) => {
  const { t } = useTranslation();

  return (
    <img
      src={profilePic} // ✅ Vite/Webpack manejará esta ruta automáticamente
      alt={alt || t("profile_picture_alt")}
      className={`${sizeClasses[size]} rounded-full object-cover`}
      role="img"
      aria-hidden={alt ? "false" : "true"}
      loading="lazy"
    />
  );
};

export default ProfilePicture;
