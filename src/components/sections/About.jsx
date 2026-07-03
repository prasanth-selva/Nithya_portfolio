import { motion } from 'framer-motion';

export default function About() {
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
    hidden: { x: -30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
    exit: { x: 30, opacity: 0 }
  };

  return (
    <motion.div 
      className="w-full h-full flex flex-col justify-center relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
        
        {/* Left Side: Content (Miya style) */}
        <div className="flex flex-col justify-center z-20 h-full pt-4 md:pt-12 relative">
          
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-nithyah-pink/50 overflow-hidden bg-white/5 backdrop-blur-sm p-1">
               {/* Small Profile Image Placeholder */}
               <div className="w-full h-full rounded-full bg-nithyah-pink/20" />
            </div>
            <div>
              <p className="text-[10px] tracking-widest text-white/50">PROFILE</p>
              <p className="text-sm tracking-widest text-nithyah-white">B.E. STUDENT</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-shadow-pink leading-none">
              ABOUT<span className="text-nithyah-emerald">.</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-md mb-12">
            <p className="text-sm md:text-base leading-relaxed text-white/80 font-light mb-6">
              “I’m Nithyah, a second-year Civil Engineering student exploring how structures, materials and sustainable design come together to shape the world around us.”
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/80 font-light">
              “I’m currently building my foundation in structural concepts, engineering design, surveying and modern construction practices.”
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {['RESUME', 'LINKEDIN', 'CONTACT'].map((btn) => (
              <button key={btn} className="px-6 py-2 rounded-full border border-white/20 hover:border-nithyah-emerald hover:bg-white/5 transition-all text-[10px] tracking-[0.2em]">
                {btn}
              </button>
            ))}
          </motion.div>

        </div>

        {/* Right Side: Dominant Visual Subject */}
      <motion.div 
        variants={{
          hidden: { opacity: 0, scale: 0.9, x: 50 },
          visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
          exit: { opacity: 0, scale: 1.05 }
        }} 
        className="flex lg:flex justify-end items-end absolute right-0 bottom-0 h-[80%] md:h-[110%] md:-mr-16 pointer-events-none opacity-30 md:opacity-100 z-0"
      >
        <div className="relative w-full max-w-xl xl:max-w-2xl h-full flex items-end">
          <img 
            src="/photos/about_image.png" 
            alt="Anime Girl"
            className="w-auto h-[95%] object-contain object-bottom drop-shadow-[0_0_30px_rgba(46,229,157,0.2)] opacity-90"
          />
        </div>

        {/* Small Metadata at bottom right of the image */}
        <div className="hidden md:flex absolute bottom-24 right-12 flex-col gap-4 text-right bg-black/40 p-6 backdrop-blur-md border-l-2 border-nithyah-emerald rounded-l-xl z-10 shadow-xl">
          <div>
            <p className="text-[10px] tracking-widest text-white/40">YEAR</p>
            <p className="text-sm tracking-wider font-bold text-nithyah-white">02</p>
          </div>
          <div>
            <p className="text-[10px] tracking-widest text-white/40">PROJECTS</p>
            <p className="text-sm tracking-wider font-bold text-nithyah-white">03</p>
          </div>
          <div>
            <p className="text-[10px] tracking-widest text-white/40">MAJOR</p>
            <p className="text-xs tracking-wider font-bold text-nithyah-pink">CIVIL ENG</p>
          </div>
        </div>
      </motion.div>

      </div>
    </motion.div>
  );
}
