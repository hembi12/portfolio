import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";

const ProfilePicture = lazy(() => import("./ProfilePicture"));
const Introduction = lazy(() => import("./Introduction"));

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Héctor Martil - Desarrollador Web</title>
        <meta
          name="description"
          content="Bienvenido a mi portafolio. Soy Héctor Martil, desarrollador web especializado en React, TypeScript y Vite."
        />
        <meta name="keywords" content="Desarrollador Web, React, TypeScript, Vite, Frontend" />
        <meta name="author" content="Héctor Martil" />
        <meta property="og:title" content="Héctor Martil - Desarrollador Web" />
        <meta property="og:description" content="Explora mi portafolio como desarrollador web especializado en React y TypeScript." />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      <main 
        className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0 md:space-x-10 lg:space-x-16 w-full"
        aria-label="Sección principal del portafolio"
      >
        <Suspense fallback={<div>Cargando presentación...</div>}>
          <Introduction />
        </Suspense>
        <div className="flex justify-center md:justify-end">
          <Suspense fallback={<div className="w-32 h-32 bg-gray-200 rounded-full animate-pulse"></div>}>
            <ProfilePicture size="large" />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Home;
