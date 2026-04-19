import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  ChevronDown, 
  Stethoscope, 
  PersonStanding, 
  Armchair, 
  Briefcase, 
  Footprints, 
  HeartPulse,
  Hand,
  Zap 
} from 'lucide-react';

const conditionCategories = [
  {
    title: "Spine & Nerve",
    icon: Stethoscope,
    items: [
      "Neck pain", "Back pain", "Slipped Disc", "Sciatica", 
      "Spinal Stenosis", "Cervical Spondylosis", "Lumbar Spondylosis", 
      "Scoliosis", "Disc Prolapse", "Nerve Compression", 
      "Interlaminar Implants"
    ]
  },
  {
    title: "Knee & Lower Limb",
    icon: PersonStanding,
    items: [
      "Ligament & Meniscus Injury", "ACL Tear", "PCL Tear", 
      "MCL/LCL Injury", "Knee Arthritis", "Patellar Tendonitis", 
      "Runner's Knee", "IT Band Syndrome", "Tendinopathy"
    ]
  },
  {
    title: "Shoulder & Upper Limb",
    icon: Armchair,
    items: [
      "Shoulder Injuries", "Frozen Shoulder", "Rotator Cuff Tear", 
      "Shoulder Dislocation", "Tennis Elbow", "Golfer’s Elbow", 
      "Carpal Tunnel Syndrome", "De Quervain's Tenosynovitis", 
      "Quadrilateral Space Syndrome"
    ]
  },
  {
    title: "Hip, Pelvis & Orthopedic",
    icon: Briefcase,
    items: [
      "Hip Labral Tear", "Groin Pull", "AVN (Avascular Necrosis)"
    ]
  },
  {
    title: "Foot & Ankle",
    icon: Footprints,
    items: [
      "Foot & Ankle Injuries", "Footballer’s Ankle", "Sprains"
    ]
  },
  {
    title: "Specialized Care",
    icon: HeartPulse,
    items: [
      "Thoracic Outlet Syndrome", "Septic Arthritis", "Vertigo"
    ]
  }
];

const manualTechniques = [
  "Mobilizations",
  "Manipulations",
  "KKMT",
  "Muscle Energy Technique (MET)",
  "Active Release Technique (ART)",
  "Positional Release Technique (PRT)",
  "Neural Mobilizations",
  "Myofascial Release (MFR)",
  "Fascial Distortion Model (FDM)",
  "Soft Tissue Release",
  "Passive Stretches & Strengthening"
];

const advancedModalities = [
  "Shockwave Therapy", 
  "Combination Therapy",
  "IFT & TENS", 
  "Ultrasound Therapy", 
  "Muscle Stimulation", 
  "Electrical Needle Stimulator", 
  "Dry Needling", 
  "IASTM", 
  "Kinesiology Taping",
  "Cupping"
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Services() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  return (
    <>
      {/* Conditions We Treat Section */}
      <section id="treatments" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy tracking-tight">Conditions We Treat</h2>
            <div className="w-20 md:w-32 h-1.5 bg-brand-teal mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 md:mt-8 text-slate-600 max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
              Specialized clinical expertise for complex spinal, orthopedic, and sports-related conditions.
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {conditionCategories.map((cat, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpItem}
                className="group h-full"
              >
                {/* Desktop Card View */}
                <div className="hidden md:block h-full bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-brand-teal/10 p-4 rounded-2xl text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                      <cat.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy">{cat.title}</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 group-hover/item:scale-125 transition-transform"></div>
                        <span className="text-slate-700 font-medium text-base group-hover/item:text-brand-navy transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Accordion View */}
                <div className="md:hidden">
                  <button 
                    onClick={() => setExpandedCategory(expandedCategory === idx ? null : idx)}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all ${expandedCategory === idx ? 'bg-brand-navy border-brand-navy text-white shadow-lg' : 'bg-white border-slate-100 text-brand-navy'}`}
                  >
                    <div className="flex items-center gap-4">
                      <cat.icon size={22} className={expandedCategory === idx ? 'text-brand-teal' : 'text-brand-teal'} />
                      <span className="font-bold text-lg">{cat.title}</span>
                    </div>
                    <ChevronDown size={20} className={`transition-transform duration-300 ${expandedCategory === idx ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {expandedCategory === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="bg-slate-50 mx-2 p-6 rounded-b-2xl border-x border-b border-slate-100">
                          <ul className="space-y-3">
                            {cat.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle size={14} className="text-brand-teal shrink-0 mt-1" />
                                <span className="text-slate-600 text-sm font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Specialized Techniques Section */}
      <section id="services" className="py-16 md:py-24 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">Our Specialized Techniques</h2>
            <div className="w-20 md:w-32 h-1.5 bg-brand-teal mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Column A: Manual Therapy */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm h-full"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="bg-brand-teal/10 p-4 rounded-2xl text-brand-teal">
                  <Hand size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">Advanced Manual Therapy</h3>
                  <p className="text-brand-teal font-extrabold text-sm uppercase tracking-wider mt-1">Hands-on Expertise</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {manualTechniques.map((tech, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <CheckCircle className="text-brand-teal shrink-0" size={20} />
                    <span className="text-brand-navy font-bold text-base md:text-lg group-hover:text-brand-teal transition-colors leading-tight">{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Column B: Advanced Modalities */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm h-full"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="bg-brand-teal/10 p-4 rounded-2xl text-brand-teal">
                  <Zap size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">Advanced Modalities</h3>
                  <p className="text-brand-teal font-extrabold text-sm uppercase tracking-wider mt-1">& Basic Care</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {advancedModalities.map((tech, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <CheckCircle className="text-brand-teal shrink-0" size={20} />
                    <div className="flex items-center gap-3">
                      <span className="text-brand-navy font-bold text-base md:text-lg group-hover:text-brand-teal transition-colors leading-tight">{tech}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-ice-blue border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4 tracking-tight">The Spine & Sports Hub Difference</h2>
          <div className="w-20 md:w-32 h-1.5 bg-brand-teal mx-auto mb-16 md:mb-24 rounded-full"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-slate-100 hover:border-brand-teal hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="bg-brand-teal/10 w-16 h-16 md:w-20 md:h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-brand-teal transition-all duration-500 group-hover:rotate-6">
                <span className="material-symbols-outlined text-brand-teal text-3xl md:text-4xl group-hover:text-white">touch_app</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4 leading-tight">Evidence-based & Hands-on</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">We provide specialized physiotherapy emphasizing the clinical power of manual expertise.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-slate-100 hover:border-brand-navy hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="bg-brand-navy/5 w-16 h-16 md:w-20 md:h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-brand-navy transition-all duration-500 group-hover:-rotate-6">
                <span className="material-symbols-outlined text-brand-navy text-3xl md:text-4xl group-hover:text-white">block</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4 leading-tight">No Unnecessary Equipment</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">We rely on deep biological knowledge and physical touch rather than generic passive machines.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-slate-100 hover:border-brand-teal hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="bg-brand-teal/10 w-16 h-16 md:w-20 md:h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-brand-teal transition-all duration-500 group-hover:rotate-6">
                <span className="material-symbols-outlined text-brand-teal text-3xl md:text-4xl group-hover:text-white">troubleshoot</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4 leading-tight">Root Cause Diagnosis</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">We conduct systematic assessments to identify and resolve the hidden triggers of your pain.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-slate-100 hover:border-brand-navy hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="bg-brand-navy/5 w-16 h-16 md:w-20 md:h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-brand-navy transition-all duration-500 group-hover:-rotate-6">
                <span className="material-symbols-outlined text-brand-navy text-3xl md:text-4xl group-hover:text-white">accessibility_new</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4 leading-tight">Precise Rehab Programs</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">Every body is unique. Every recovery program is custom-engineered to match your functional goals.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
