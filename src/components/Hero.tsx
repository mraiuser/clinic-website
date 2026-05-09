import { motion, type Variants } from 'framer-motion';
// @ts-ignore
import heroImg from '../assets/hero-hd.jpg';

export default function Hero({ onBookClick }: { onBookClick?: () => void }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative bg-white overflow-hidden pt-10 pb-16 md:pt-20 md:pb-32 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-16 md:px-8 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <motion.div 
          className="z-10 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge Above Headline */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-brand-teal/10 rounded-full border border-brand-teal/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
            <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">Advanced Manual Therapy in India</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-brand-navy leading-tight mb-6 tracking-tight font-serif"
          >
            Experts in Spine Care & Sports Rehabilitation
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-slate-600 text-base md:text-lg mb-10 max-w-xl leading-relaxed font-medium"
          >
            At Spine & Sports Hub, we combine advanced physiotherapy with hands-on expertise to deliver lasting recovery, improved mobility, and peak physical performance.
          </motion.p>
          


          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center mb-10">
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0,163,173,0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={(e: React.MouseEvent) => { e.preventDefault(); if (onBookClick) onBookClick(); }}
              className="w-full sm:w-auto bg-brand-teal text-white px-8 md:px-10 py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#00929C] transition-all shadow-lg active:scale-95"
            >
              Book Consultation
            </motion.button>
            <motion.a 
              href="#services"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(0,59,73,0.02)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-transparent text-brand-navy border-2 border-brand-navy px-8 md:px-10 py-4 rounded-lg font-bold text-base md:text-lg hover:bg-brand-navy/5 transition-all active:scale-95 flex items-center justify-center"
            >
              View Treatments
            </motion.a>
          </motion.div>
        </motion.div>
        
        <div className="relative group w-full max-w-md lg:max-w-none lg:ml-auto mt-10 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Premium Feature Box */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-50">
              <img 
                alt="Advanced spinal therapy session" 
                className="relative w-full aspect-[4/3] object-cover" 
                src={heroImg}
              />
              <div className="absolute inset-0 bg-slate-900/5 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Floating Badge (Success Rate) */}
            <div 
              className="absolute bottom-4 left-24 md:left-32 bg-white/95 backdrop-blur-md p-3 md:p-6 rounded-xl md:rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 md:gap-4 z-20 animate-fade-lock"
            >
              <div className="bg-brand-teal/10 text-brand-teal p-2 md:p-3 rounded-full flex">
                <span className="material-symbols-outlined font-bold text-sm md:text-base">verified</span>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-brand-navy">98%</div>
                <div className="text-[10px] md:text-sm text-slate-500 font-bold whitespace-nowrap uppercase tracking-tighter">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Dr. Harshith Badge - Locked absolute positioning */}
          <div className="absolute top-4 -right-4 z-20">
            <div className="bg-white/90 backdrop-blur-md p-3 md:p-6 rounded-xl md:rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 md:gap-4 animate-fade-lock">
              <div className="bg-brand-teal/10 text-brand-teal p-2 md:p-3 rounded-full flex">
                <span className="material-symbols-outlined font-bold text-sm md:text-base">medical_services</span>
              </div>
              <div>
                <div className="text-sm md:text-base font-extrabold text-brand-navy">Dr. Harshith</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold whitespace-nowrap uppercase tracking-tighter">Manual Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-0"></div>
    </section>
  );
}
