import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Technologies } from './components/Technologies';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingSidebars } from './components/FloatingSidebars';
import './App.css';

function App() {
  return (
    <>
      <FloatingSidebars />
      <div className="portfolio-container">
        <Hero />
        <AboutMe />
        <Technologies />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;