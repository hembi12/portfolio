import profilePic from "/src/assets/profile-picture.png";
import { WordRotate } from "@/components/ui/word-rotate";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-6 md:space-y-0 md:space-x-10 lg:space-x-16">
      <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center md:items-start h-full">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="flex items-center justify-center md:justify-start gap-2">
            Hi, I'm <span className="relative"><WordRotate words={["Héctor", "Martil"]} className="inline-flex" /></span> <span>👋</span>
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 max-w-3xl mx-auto md:mx-0">
          Customer service expert becoming a full-stack developer. Passionate about programming who sits in front of his monitors every day to learn something new and improve.
        </p>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src={profilePic}
          alt="Héctor's profile picture"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
