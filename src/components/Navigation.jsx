import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export default function Navigation({ activeSection, totalSections, onNext, onPrev }) {
  return (
    <div className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 md:gap-6 bg-black/40 backdrop-blur-md p-3 rounded-full border border-nithyah-pink/20 shadow-[0_0_15px_rgba(255,45,135,0.1)]">
      
      <button 
        onClick={onPrev}
        disabled={activeSection === 0}
        className="p-2 rounded-full bg-white/5 hover:bg-nithyah-pink hover:text-white text-white/70 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none shadow-sm"
      >
        <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div className="flex flex-col gap-4 py-2 items-center relative">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/10 -z-10" />
        
        {Array.from({ length: totalSections }).map((_, idx) => (
          <motion.div
            key={idx}
            className={clsx(
              "rounded-full transition-all duration-500 cursor-pointer shadow-sm",
              activeSection === idx 
                ? "bg-nithyah-emerald w-3 h-8 shadow-[0_0_10px_rgba(46,229,157,0.5)]" 
                : "bg-white/40 w-2 h-2 hover:bg-white/80"
            )}
            animate={{ scale: activeSection === idx ? 1 : 0.9 }}
          />
        ))}
      </div>

      <button 
        onClick={onNext}
        disabled={activeSection === totalSections - 1}
        className="p-2 rounded-full bg-white/5 hover:bg-nithyah-emerald hover:text-nithyah-black text-white/70 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none shadow-sm"
      >
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
      </button>

    </div>
  );
}
