import { Helmet } from "react-helmet-async";
import ProfilePicture from "./ProfilePicture";
import Introduction from "./Introduction";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Héctor Martil - Desarrollador Web</title>
        <meta
          name="description"
          content="Bienvenido a mi portafolio. Soy Héctor Martil, desarrollador web especializado en React, TypeScript y Vite."
        />
      </Helmet>
      <section className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0 md:space-x-10 lg:space-x-16 w-full">
        <Introduction />
        <div className="flex justify-center md:justify-end">
          <ProfilePicture size="large" />
        </div>
      </section>
    </>
  );
};

export default Home;
