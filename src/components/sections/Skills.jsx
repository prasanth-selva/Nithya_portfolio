import { motion } from 'framer-motion';

const skills = [
  "AutoCAD", "Engineering Drawing", "Surveying Basics", "Building Materials", 
  "Structural Fundamentals", "Construction Technology", "Problem Solving", "Team Collaboration"
];

export default function Skills() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-4xl mx-auto relative">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mb-16"
      >
        <h2 className="text-sm tracking-[0.3em] text-nithyah-emerald mb-2">CORE SKILLS</h2>
        <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-shadow-pink">
          FOUNDATION.
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: index * 0.1 }}
            className="group relative py-4 px-6 cursor-crosshair flex items-center"
          >
            {/* Architectural Measurement Lines (Hover effect) */}
            <div className="absolute inset-0 border border-transparent group-hover:border-nithyah-emerald/30 transition-colors duration-500 pointer-events-none" />
            
            {/* Top/Bottom measurement marks */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-transparent group-hover:bg-nithyah-emerald/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-transparent group-hover:bg-nithyah-emerald/50 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 pointer-events-none" />
            
            <div className="absolute left-0 top-0 h-full w-[1px] bg-transparent group-hover:bg-nithyah-pink/50 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 pointer-events-none" />
            
            {/* Label texts appearing on hover */}
            <span className="absolute -top-3 left-2 text-[8px] tracking-widest text-nithyah-emerald opacity-0 group-hover:opacity-100 transition-opacity delay-300">
              L-{index + 1}
            </span>
            <span className="absolute top-1/2 -left-6 -translate-y-1/2 -rotate-90 text-[8px] tracking-widest text-nithyah-pink opacity-0 group-hover:opacity-100 transition-opacity delay-300">
              MEASURE
            </span>

            <h3 className="text-lg md:text-xl font-light tracking-widest group-hover:text-nithyah-emerald group-hover:translate-x-2 transition-transform duration-300">
              {skill.toUpperCase()}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Background blueprint lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
}
