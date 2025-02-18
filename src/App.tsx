import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FC, Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";

const About = lazy(() => import("./components/about/About"));
const WorkExperience = lazy(() => import("./components/workexperience/WorkExperience"));
const Home = lazy(() => import("./components/home/Home"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Contact = lazy(() => import("./components/contact/ContactForm"));
const Education = lazy(() => import("./components/education/Education"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Dock = lazy(() => import("./components/dock/Dock"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const FallbackLoader: FC = () => (
  <div className="min-h-screen flex items-center justify-center text-white">
    <p>Loading...</p>
  </div>
);

const MainLayout: FC = () => (
  <HelmetProvider>
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 md:px-16 lg:px-32 py-8">
      <div className="max-w-2xl w-full">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
        <section id="workexperience"><WorkExperience /></section>
        <section id="education"><Education /></section>
      </div>
      <Footer />
      <Dock />
    </div>
  </HelmetProvider>
);

const App: FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<FallbackLoader />}>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* ToastContainer global para manejar notificaciones en toda la app */}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover={false}
          draggable={false}
          theme="dark"
        />
      </Router>
    </HelmetProvider>
  );
};

export default App;
