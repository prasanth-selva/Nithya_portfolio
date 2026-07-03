import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2025',
    title: 'Started B.E. Civil Engineering',
    desc: 'Began the journey into the world of structures and materials.'
  },
  {
    year: '2026',
    title: 'Exploring structural design, surveying and sustainable construction',
    desc: 'Deepening knowledge through practical labs and conceptual projects.'
  },
  {
    year: 'NEXT',
    title: 'Building stronger technical skills and practical project experience',
    desc: 'Looking forward to internships and real-world applications.'
  }
];

export default function Journey() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-4xl mx-auto relative pl-2 md:pl-24">
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-shadow-pink">
          JOURNEY.
        </h1>
      </motion.div>

      <div className="relative border-l border-nithyah-emerald/30 ml-4 py-8">
        
        {/* Glow effect on line */}
        <div className="absolute top-1/2 left-0 w-[1px] h-32 -translate-y-1/2 bg-nithyah-pink shadow-[0_0_15px_#FF2D87] -translate-x-[1px] z-10" />

        <div className="flex flex-col gap-12 md:gap-16 pl-8 md:pl-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[39px] md:-left-[55px] top-1 w-3 h-3 rounded-full bg-nithyah-black border border-nithyah-emerald group-hover:bg-nithyah-pink group-hover:border-nithyah-pink transition-colors duration-300 z-20" />
              
              <h3 className="text-xs tracking-[0.3em] text-nithyah-emerald font-bold mb-3 group-hover:text-nithyah-pink transition-colors">
                {item.year}
              </h3>
              <h4 className="text-xl md:text-2xl font-light text-nithyah-white mb-2 leading-snug">
                {item.title}
              </h4>
              <p className="text-sm text-white/50 font-light max-w-md">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
