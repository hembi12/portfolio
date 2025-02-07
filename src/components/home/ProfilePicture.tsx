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

const ProfilePicture: React.FC<ProfilePictureProps> = ({ alt = "Profile picture", size = "medium" }) => {
  return (
    <img
      src={profilePic}
      alt={alt}
      className={`${sizeClasses[size]} rounded-full object-cover`}
    />
  );
};

export default ProfilePicture;
