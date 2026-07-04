import { motion } from 'framer-motion';
import { Flower, User, Camera, Mail } from 'lucide-react';
import clsx from 'clsx';

const navItems = ['PROFILE', 'ABOUT', 'SKILLS', 'PROJECTS', 'JOURNEY', 'CONTACT'];

export default function Navigation({ activeSection, totalSections, onNext, onPrev }) {
  return (
    <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-between h-[80vh] py-8 pointer-events-auto">
      
      {/* Top Icon */}
      <div className="text-nithyah-pink mb-8">
        <Flower className="w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_0_10px_rgba(255,45,135,0.8)]" />
      </div>

      {/* Vertical Text Links */}
      <div className="flex flex-col gap-6 items-center flex-1">
        {navItems.map((item, idx) => {
          const isActive = activeSection === idx;
          return (
            <motion.div
              key={item}
              onClick={() => {
                if (idx > activeSection) {
                  for(let i=0; i < idx - activeSection; i++) onNext();
                } else if (idx < activeSection) {
                  for(let i=0; i < activeSection - idx; i++) onPrev();
                }
              }}
              className={clsx(
                "cursor-pointer transition-all duration-300 text-[10px] md:text-xs tracking-[0.3em] font-medium py-4 px-1 rounded-md flex items-center justify-center",
                isActive 
                  ? "bg-nithyah-pink/20 text-white shadow-[0_0_15px_rgba(255,45,135,0.4)] border border-nithyah-pink/50" 
                  : "text-white/40 hover:text-white"
              )}
              style={{ writingMode: 'vertical-rl' }}
              whileHover={{ scale: 1.05 }}
              animate={{ scale: isActive ? 1.05 : 1 }}
            >
              {item}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Social Icons */}
      <div className="flex flex-col gap-6 mt-8">
        <a href="#" className="text-white/40 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">
          <User className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a href="#" className="text-white/40 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">
          <Camera className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a href="#" className="text-white/40 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">
          <Mail className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>

    </div>
  );
}
