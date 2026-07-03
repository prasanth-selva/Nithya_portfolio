import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown, PlayCircle } from 'lucide-react';
import clsx from 'clsx';

export default function Navigation({ activeSection, totalSections, onNext, onPrev }) {
  return (
    <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 z-50 flex items-center gap-2 md:gap-6">
      
      <div className="flex flex-col items-end mr-4">
        <span className="text-[10px] tracking-[0.2em] text-white/50 mb-1">NAVIGATION</span>
        <div className="flex gap-2">
          {Array.from({ length: totalSections }).map((_, idx) => (
            <motion.div
              key={idx}
              className={clsx(
                "w-1.5 h-1.5 rounded-full transition-colors duration-500",
                activeSection === idx ? "bg-nithyah-emerald" : "bg-white/20"
              )}
              animate={{ scale: activeSection === idx ? 1.5 : 1 }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={onPrev}
          disabled={activeSection === 0}
          className="p-2 border border-white/10 rounded-full hover:bg-white/10 hover:border-nithyah-pink transition-all disabled:opacity-30 disabled:pointer-events-none group"
        >
          <ChevronUp className="w-4 h-4 text-white group-hover:text-nithyah-pink transition-colors" />
        </button>

        <button 
          onClick={() => {}} 
          className="px-4 py-2 md:px-6 border border-white/10 rounded-full hover:bg-white/10 hover:border-nithyah-emerald transition-all text-[10px] md:text-xs tracking-widest flex items-center gap-1 md:gap-2 group"
        >
          <PlayCircle className="w-4 h-4 text-white group-hover:text-nithyah-emerald transition-colors" />
          <span>OPEN</span>
        </button>

        <button 
          onClick={onNext}
          disabled={activeSection === totalSections - 1}
          className="p-2 border border-white/10 rounded-full hover:bg-white/10 hover:border-nithyah-pink transition-all disabled:opacity-30 disabled:pointer-events-none group"
        >
          <ChevronDown className="w-4 h-4 text-white group-hover:text-nithyah-pink transition-colors" />
        </button>
      </div>

    </div>
  );
}
