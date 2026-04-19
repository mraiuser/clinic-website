import { Phone, MessageCircle } from 'lucide-react';

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 flex md:hidden z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <a 
        href="tel:+919948834312" 
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-navy text-white font-bold text-sm min-h-[56px]"
      >
        <Phone size={18} />
        Call Now
      </a>
      <a 
        href="https://wa.me/919948834312" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-teal text-white font-bold text-sm min-h-[56px]"
      >
        <MessageCircle size={18} />
        WhatsApp Us
      </a>
    </div>
  );
}
