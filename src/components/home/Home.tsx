import ProfilePicture from "./ProfilePicture";
import Introduction from "./Introduction";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0 md:space-x-10 lg:space-x-16 w-full">
      <Introduction />
      <div className="flex justify-center md:justify-end">
        <ProfilePicture size="large" aria-hidden="false" alt="Profile Picture" />
      </div>
    </div>
  );
};

export default Home;
