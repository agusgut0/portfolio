import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
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
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;