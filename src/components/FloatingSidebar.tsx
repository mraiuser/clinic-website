import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingSidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-3 lg:gap-4 scale-90 lg:scale-100">
      <a 
        href="tel:+919948834312" 
        className="w-10 h-10 lg:w-12 lg:h-12 bg-[#22c55e] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
        aria-label="Call Us"
      >
        <Phone size={20} className="lg:hidden" />
        <Phone size={24} className="hidden lg:block" />
      </a>
      <a 
        href="https://wa.me/919948834312" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 lg:w-12 lg:h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
        aria-label="WhatsApp"
      >
        <MessageCircle size={20} className="lg:hidden" />
        <MessageCircle size={24} className="hidden lg:block" />
      </a>
      <a 
        href="https://www.instagram.com/SpineandSportsHub/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
        aria-label="Instagram"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lg:hidden" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden lg:block" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
    </div>
  );
}
