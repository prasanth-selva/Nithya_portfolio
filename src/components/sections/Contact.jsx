import { motion } from 'framer-motion';
import { Mail, MessageCircle, Link } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
      
      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h1 className="text-[20vw] font-display font-black tracking-tighter text-nithyah-pink whitespace-nowrap">
          NITHYAH.
        </h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-3xl"
      >
        <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter text-shadow-pink leading-none mb-8">
          LET’S BUILD<br />
          <span className="text-nithyah-emerald">SOMETHING</span><br />
          MEANINGFUL.
        </h2>

        <p className="text-lg md:text-xl font-light text-white/80 italic mb-12">
          “Open to learning, collaboration, student projects and new opportunities.”
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <button className="px-8 py-4 bg-nithyah-pink text-white text-xs tracking-[0.2em] hover:bg-white hover:text-nithyah-black transition-colors rounded-full font-bold">
            SEND A MESSAGE
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/20 text-white text-xs tracking-[0.2em] hover:border-nithyah-emerald hover:text-nithyah-emerald transition-colors rounded-full flex items-center gap-2">
            <Link className="w-4 h-4" /> CONNECT ON LINKEDIN
          </button>
        </div>

        <div className="flex items-center justify-center gap-8 text-white/40">
          <a href="#" className="hover:text-nithyah-pink transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-nithyah-emerald transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

      </motion.div>
    </div>
  );
}
