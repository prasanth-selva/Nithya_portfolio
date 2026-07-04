import { motion } from 'framer-motion';

export default function Welcome({ onEnter }) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-nithyah-black text-white">
      {/* Subtle animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_#FF2D87_0%,_transparent_50%)]"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-widest text-shadow-pink mb-4">
          NITHYAH.
        </h1>
        <p className="text-xs tracking-[0.3em] text-nithyah-emerald mb-12">PORTFOLIO EXPERIENCE</p>

        <div className="flex flex-col md:flex-row gap-6">
          <button 
            onClick={() => onEnter(true)}
            className="px-8 py-4 border border-nithyah-pink/50 hover:bg-nithyah-pink hover:text-white hover:border-nithyah-pink transition-all duration-300 rounded-full text-xs tracking-widest flex items-center justify-center shadow-[0_0_15px_rgba(255,45,135,0.2)]"
          >
            ENTER WITH MUSIC
          </button>
          
          <button 
            onClick={() => onEnter(false)}
            className="px-8 py-4 border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300 rounded-full text-xs tracking-widest text-white/70 hover:text-white flex items-center justify-center"
          >
            ENTER WITHOUT MUSIC
          </button>
        </div>
      </motion.div>
    </div>
  );
}
