import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const projects = [
  {
    id: '01',
    title: 'SUSTAINABLE RESIDENTIAL CONCEPT',
    description: 'A conceptual residential building plan focused on natural lighting, ventilation, efficient space planning and environmentally conscious material choices.',
    category: 'SUSTAINABLE DESIGN',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'RAINWATER HARVESTING SYSTEM',
    description: 'A conceptual system for collecting, filtering and storing rainwater for non-potable household applications.',
    category: 'WATER MANAGEMENT',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2098&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'SMALL-SCALE BRIDGE MODEL',
    description: 'An academic structural model exploring load distribution, stability and the basic behavior of bridge components.',
    category: 'STRUCTURES',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1541888046-608b63e80064?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <motion.div 
      className="w-full h-full flex flex-col justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute top-0 left-0">
        <h2 className="text-4xl font-display font-black tracking-tighter text-shadow-pink opacity-20 pointer-events-none">
          SELECTED WORKS.
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row h-full items-center justify-between gap-4 lg:gap-8 pt-16 lg:pt-8 overflow-y-auto lg:overflow-visible pb-12 lg:pb-0">
        
        {/* Left Side: Navigation List (Kagura style) */}
        <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-4 lg:gap-6 z-20 overflow-x-auto lg:overflow-visible shrink-0 pb-2 lg:pb-0 no-scrollbar">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveProject(idx)}
              className={clsx(
                "text-left group flex items-center gap-4 transition-all duration-300",
                activeProject === idx ? "opacity-100" : "opacity-30 hover:opacity-60"
              )}
            >
              <span className="text-[10px] tracking-widest font-mono group-hover:text-nithyah-emerald transition-colors">
                {proj.id}
              </span>
              <span className={clsx(
                "text-xs md:text-sm tracking-widest transition-transform duration-300",
                activeProject === idx ? "translate-x-4 text-nithyah-emerald font-bold" : "group-hover:translate-x-2"
              )}>
                {proj.title.split(' ')[0]} {/* Shorten for nav */}
              </span>
            </button>
          ))}
        </div>

        {/* Center: Dominant Visual Subject */}
        <div className="w-full lg:w-2/4 h-[40vh] lg:h-[80%] relative z-10 flex justify-center items-center shrink-0 my-4 lg:my-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title} 
                className="w-full h-full object-cover mix-blend-luminosity opacity-70"
              />
              <div className="absolute inset-0 bg-nithyah-pink/10 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-tr from-nithyah-black via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Project Details */}
        <div className="w-full lg:w-1/4 flex flex-col justify-end lg:h-[80%] pb-4 lg:pb-12 z-20 text-left lg:text-right px-2 lg:px-0 lg:pr-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-[10px] tracking-[0.2em] text-nithyah-emerald mb-2">PROJECT {projects[activeProject].id}</p>
                <h3 className="text-2xl md:text-4xl font-display font-bold leading-none tracking-tight">
                  {projects[activeProject].title}
                </h3>
              </div>

              <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">
                {projects[activeProject].description}
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <div className="flex justify-end gap-4">
                  <span className="text-[9px] tracking-widest text-white/40">CATEGORY</span>
                  <span className="text-[9px] tracking-widest font-bold text-nithyah-pink">{projects[activeProject].category}</span>
                </div>
                <div className="flex justify-end gap-4">
                  <span className="text-[9px] tracking-widest text-white/40">YEAR</span>
                  <span className="text-[9px] tracking-widest font-bold text-white">{projects[activeProject].year}</span>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-2 mt-4">
                <button className="text-[10px] tracking-[0.2em] py-2 px-6 border border-white/20 hover:border-nithyah-emerald hover:bg-white/5 transition-all w-fit">
                  VIEW PROJECT
                </button>
                <button className="text-[10px] tracking-[0.2em] py-2 px-6 border border-transparent hover:border-white/20 transition-all w-fit opacity-50 hover:opacity-100">
                  DRAWINGS
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}
