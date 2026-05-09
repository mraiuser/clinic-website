import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Header({ onBookClick }: { onBookClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const navLinks = ["Home", "About", "Our Services", "Treatments", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white/90 backdrop-blur-md sticky top-0 z-[60] shadow-sm border-b border-slate-100 transition-colors duration-200"
      >
        <nav className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <img src="/logo.png" alt="Logo" className="h-10 md:h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-brand-navy font-extrabold text-lg md:text-xl leading-none">Spine &</span>
              <span className="text-brand-teal font-extrabold text-lg md:text-xl leading-none">Sports Hub</span>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link === "Home" ? "home" : link === "About" ? "about" : link === "Our Services" ? "services" : link === "Treatments" ? "treatments" : link === "Contact" ? "contact" : "";
              const href = `#${id}`;
              const isActive = activeLink === link;

              return (
                <div key={link} className="relative py-2">
                  <a 
                    href={href}
                    className={`text-brand-navy/80 hover:text-brand-navy transition-colors duration-200 text-sm font-semibold tracking-wide ${isActive ? "text-brand-navy" : ""}`}
                    onClick={() => setActiveLink(link)}
                  >
                    {link}
                  </a>
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-teal rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-3">
              <span className="text-xs font-bold text-[#003B49]/60 uppercase tracking-widest">Follow Us :</span>
              <div className="flex gap-2">
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#003B49] hover:bg-slate-50 transition-colors"
                  aria-label="Facebook"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.62 0 3.119.193 3.119.193v3.59h-1.314c-1.326 0-1.722.845-1.722 1.95v1.825h4.156l-.565 3.667h-3.591v7.98h-6.041Z"/></svg>
                </a>
                <a 
                  href="https://www.instagram.com/SpineandSportsHub/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#003B49] hover:bg-slate-50 transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#003B49] hover:bg-slate-50 transition-colors"
                  aria-label="YouTube"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-4.07-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"/></svg>
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-brand-navy p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white z-[100] flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-brand-navy font-extrabold text-lg leading-none">Spine &</span>
                <span className="text-brand-teal font-extrabold text-lg leading-none">Sports Hub</span>
              </div>
            </div>
              <button 
                onClick={toggleMenu} 
                className="text-brand-navy p-2 hover:bg-slate-50 rounded-full transition-colors"
                aria-label="Close Menu"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center space-y-8">
              {navLinks.map((link, idx) => {
                const id = link === "Home" ? "home" : link === "About" ? "about" : link === "Our Services" ? "services" : link === "Treatments" ? "treatments" : link === "Contact" ? "contact" : "";
                const href = `#${id}`;
                return (
                  <motion.a 
                    key={link}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (idx * 0.05) }}
                    href={href}
                    className={`text-2xl font-bold transition-all tracking-tight ${activeLink === link ? "text-brand-teal" : "text-brand-navy hover:text-brand-teal"}`}
                    onClick={() => {
                      setActiveLink(link);
                      toggleMenu();
                    }}
                  >
                    {link}
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-auto space-y-6">
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={(e) => { e.preventDefault(); toggleMenu(); if (onBookClick) onBookClick(); }}
                className="bg-brand-teal text-white w-full py-5 rounded-2xl font-bold text-xl shadow-xl shadow-brand-teal/20 flex items-center justify-center gap-3"
              >
                <Phone size={24} />
                Book Online
              </motion.button>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Open 7 Days • 9 AM - 9 PM</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
