import './App.css';
import NavbarPage from './components/Navbar';
import HomePage from './components/Homepage';
import AboutPage from './components/AboutPage';
import SkillPage from './components/SkillsPage';
import Education from './components/Eduactionpage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[5%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] opacity-60"></div>
        <div className="absolute bottom-0 right-[5%] top-[30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] opacity-70"></div>
      </div>
    </div>
    <div className="container mx-auto px-8">
      <NavbarPage/>
      <HomePage/>
      <AboutPage/>
      <SkillPage/>
      <Education/>
      <ProjectsPage/>
      <ContactPage/>
    </div>
  </div>
  );
};

export default App;

