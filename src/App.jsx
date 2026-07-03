import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Cursor from './components/Cursor';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Journey from './components/sections/Journey';
import Contact from './components/sections/Contact';

const SECTIONS = ['HERO', 'ABOUT', 'SKILLS', 'PROJECTS', 'JOURNEY', 'CONTACT'];

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Handle keyboard and wheel navigation
  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return;
      
      if (e.deltaY > 50) {
        setActiveSection((prev) => Math.min(prev + 1, SECTIONS.length - 1));
        isScrolling = true;
        setTimeout(() => isScrolling = false, 1000); // Wait 1s before allowing next scroll
      } else if (e.deltaY < -50) {
        setActiveSection((prev) => Math.max(prev - 1, 0));
        isScrolling = true;
        setTimeout(() => isScrolling = false, 1000);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setActiveSection((prev) => Math.min(prev + 1, SECTIONS.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setActiveSection((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const nextSection = () => setActiveSection((prev) => Math.min(prev + 1, SECTIONS.length - 1));
  const prevSection = () => setActiveSection((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-nithyah-black text-nithyah-white">
      <Cursor />
      <Background activeIndex={activeSection} />

      {/* Main Translucent Frame */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12 pointer-events-none">
        <div className="relative w-full h-full max-w-[1900px] max-h-[1000px] md:w-[96vw] md:h-[96vh] border border-white/10 bg-nithyah-burgundy/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl pointer-events-auto">
          
          {/* Top Left Branding/Sound Toggle */}
          <div className="absolute top-6 left-8 z-50 flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-nithyah-pink animate-pulse" />
            <span className="text-xs tracking-[0.2em] font-medium text-white/50">NITHYA SRI PORTFOLIO</span>
          </div>

          <button 
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="absolute top-6 right-8 z-50 text-xs tracking-[0.1em] font-medium text-white/50 hover:text-nithyah-pink transition-colors"
          >
            SOUND [{soundEnabled ? 'ON' : 'OFF'}]
          </button>

          {/* Section Content */}
          <div className="relative w-full h-full p-8 md:p-16 pt-24 pb-24">
            <AnimatePresence mode="wait">
              {activeSection === 0 && <Hero key="hero" />}
              {activeSection === 1 && <About key="about" />}
              {activeSection === 2 && <Skills key="skills" />}
              {activeSection === 3 && <Projects key="projects" />}
              {activeSection === 4 && <Journey key="journey" />}
              {activeSection === 5 && <Contact key="contact" />}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <Navigation 
            activeSection={activeSection} 
            totalSections={SECTIONS.length}
            onNext={nextSection}
            onPrev={prevSection}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
