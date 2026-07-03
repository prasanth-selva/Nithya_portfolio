import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
    exit: { y: -20, opacity: 0 }
  };

  return (
    <motion.div 
      className="w-full h-full flex flex-col justify-center relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      {/* Side Vertical Text (Left) */}
      <motion.div variants={itemVariants} className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden md:block">
        <p className="text-[10px] tracking-[0.4em] text-white/40 whitespace-nowrap">
          BUILDING IDEAS. SHAPING TOMORROW.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="md:ml-24 max-w-3xl">
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-sm tracking-[0.3em] text-nithyah-emerald mb-2">B.E. CIVIL ENGINEERING</h2>
          <h3 className="text-xs tracking-widest text-white/50">2ND YEAR STUDENT</h3>
        </motion.div>

        <motion.div variants={itemVariants} className="relative z-10 mb-8 whitespace-nowrap">
          <h1 className="text-5xl md:text-[100px] leading-none font-display font-black tracking-tighter mix-blend-overlay text-shadow-pink">
            NITHYA SRI<span className="text-nithyah-pink">.</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-md border-l border-nithyah-pink/30 pl-6 mb-12">
          <p className="text-lg md:text-xl font-light text-white/80 italic leading-relaxed">
            “Learning to shape spaces, structures, and ideas that stand the test of time.”
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <button className="px-8 py-4 bg-white/5 border border-white/20 hover:border-nithyah-pink hover:bg-nithyah-pink/10 backdrop-blur-md transition-all text-xs tracking-[0.2em] relative overflow-hidden group">
            <span className="relative z-10">EXPLORE WORK</span>
            <div className="absolute inset-0 bg-nithyah-pink translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" />
          </button>
        </motion.div>
      </div>

      {/* Right Side: Dominant Visual Subject */}
      <motion.div 
        variants={{
          hidden: { opacity: 0, scale: 0.9, x: 50 },
          visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
          exit: { opacity: 0, scale: 1.05 }
        }} 
        className="hidden lg:flex justify-end items-end absolute right-0 bottom-0 h-[125%] -mr-12 pointer-events-none"
      >
        <div className="relative w-full max-w-2xl xl:max-w-4xl h-full flex items-end">
          <img 
            src="/photos/hero.png" 
            alt="Nithya Sri"
            className="w-auto h-[100%] object-contain object-bottom drop-shadow-[0_0_30px_rgba(255,45,135,0.2)] opacity-90 origin-bottom scale-110"
          />
        </div>

        {/* Small Metadata overlaying the image */}
        <div className="absolute bottom-32 -left-4 flex flex-col gap-4 text-left bg-black/40 p-6 backdrop-blur-md border-r-2 border-nithyah-pink rounded-r-xl shadow-xl z-10">
          <div>
            <p className="text-[9px] tracking-widest text-white/40 mb-1">STATUS</p>
            <p className="text-xs tracking-wider text-nithyah-white">LEARNING & BUILDING</p>
          </div>
          <div>
            <p className="text-[9px] tracking-widest text-white/40 mb-1">FIELD</p>
            <p className="text-xs tracking-wider text-nithyah-white">CIVIL ENGINEERING</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
