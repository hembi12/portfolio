import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import WorkExperience from "./components/workexperience/WorkExperience";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/ContactForm";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Dock from "./components/dock/Dock";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound"; // Importamos la nueva página 404
import { FC } from "react";

const MainLayout: FC = () => (
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
);

const App: FC = () => {
  return (
    <Router>
      <Routes>
        {/* Página principal con el diseño original */}
        <Route path="/" element={<MainLayout />} />

        {/* Página de Política de Privacidad */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Página 404 para rutas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
