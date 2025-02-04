import profilePic from "/src/assets/profile-picture.png";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Hi, I'm Héctor <span>👋</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 max-w-3xl mx-auto md:mx-0">
          Customer service expert becoming a full-stack developer. Passionate about programming who sits in front of his monitors every day to learn something new and improve.
        </p>
      </div>
      <img
        src={profilePic}
        alt="Héctor's profile picture"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
      />
    </div>
  );
};

export default Home;
