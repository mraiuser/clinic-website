export default function Footer({ onBookClick }: { onBookClick: () => void }) {
  return (
    <footer className="bg-ice-blue py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="text-xl font-extrabold flex items-center">
              <span className="text-brand-navy">Spine &</span>
              <span className="text-brand-teal ml-2">Sports Hub</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Advanced Manual Therapy & Sports Rehabilitation Clinic. Dedicated to evidence-based care and patient recovery.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full border border-slate-200 text-brand-navy hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.62 0 3.119.193 3.119.193v3.59h-1.314c-1.326 0-1.722.845-1.722 1.95v1.825h4.156l-.565 3.667h-3.591v7.98h-6.041Z"/></svg>
              </a>
              <a href="https://www.instagram.com/SpineandSportsHub/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-slate-200 text-brand-navy hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="p-2 rounded-full border border-slate-200 text-brand-navy hover:bg-brand-teal hover:text-white transition-all shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-4.07-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-brand-navy font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-teal text-lg">mail</span>
                <a className="text-slate-500 hover:text-brand-teal transition-all" href="mailto:spineandsportshub@gmail.com">spineandsportshub@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-teal text-lg">call</span>
                <a className="text-slate-500 hover:text-brand-teal transition-all" href="tel:+919948834312">+91 9948834312</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-teal text-lg">chat</span>
                <a className="text-slate-500 hover:text-brand-teal transition-all" href="https://wa.me/919948834312">WhatsApp: +91 9948834312</a>
              </li>
              <li className="pt-2">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Spine+%26+Sports+Hub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-navy text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-brand-teal transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  Locate Us on Maps
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-brand-navy font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a className="text-slate-500 hover:text-brand-teal transition-all" href="#about">About Our Specialist</a></li>
              <li><a className="text-slate-500 hover:text-brand-teal transition-all" href="#services">Our Services</a></li>
              <li><a onClick={(e) => { e.preventDefault(); onBookClick(); }} className="text-slate-500 hover:text-brand-teal transition-all cursor-pointer" href="#">Book Appointment</a></li>
              <li><a className="text-slate-500 hover:text-brand-teal transition-all" href="#">Treatment FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-brand-navy font-bold mb-6">Clinic Hours</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex justify-between items-center">
                <span>Mon - Sun:</span> 
                <span className="font-bold text-brand-navy">9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></div>
                <span className="font-bold text-brand-teal text-[10px] uppercase tracking-wider">Open 7 Days a Week</span>
              </li>
              <li className="pt-4 border-t border-slate-200 mt-4 text-[10px] uppercase font-bold tracking-widest text-slate-400">
                Professional Clinical Authority
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-xs">
            © 2026 Spine & Sports Hub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
