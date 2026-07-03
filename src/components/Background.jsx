import { motion, AnimatePresence } from 'framer-motion';

const bgImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', // Hero
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop', // About
  'https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=2070&auto=format&fit=crop', // Skills
  'https://images.unsplash.com/photo-1541888046-608b63e80064?q=80&w=2070&auto=format&fit=crop', // Projects
  'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2098&auto=format&fit=crop', // Journey
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', // Contact
];

export default function Background({ activeIndex }) {
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-nithyah-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={bgImages[activeIndex]} 
            alt="Cinematic architectural background" 
            className="w-full h-full object-cover origin-center"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Overlays for depth and atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-tr from-nithyah-black via-nithyah-burgundy/40 to-nithyah-black mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-nithyah-pink/10 via-transparent to-nithyah-black/80" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  );
}
