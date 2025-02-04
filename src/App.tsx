import About from "./components/about/About";
import WorkExperience from "./components/WorkExperience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Dock from "./components/Dock";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 md:px-16 lg:px-32 py-8">
      <div className="max-w-2xl w-full">
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="contact"><Contact /></div>
        <div id="workexperience"><WorkExperience /></div>
        <div id="education"><Education /></div>
      </div>
      <Footer />
      <Dock /> {/* Se mantiene aquí para que siempre esté visible */}
    </div>
  );
};

export default App;
