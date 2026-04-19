import { useState } from 'react';
import doctorImg from '../assets/dr-harshith.jpg';

export default function Specialist({ onBookClick }: { onBookClick?: () => void }) {
  const [imageError, setImageError] = useState(false);

  const specialties = [
    { title: "Manual Therapy", icon: "front_hand" },
    { title: "Sports Rehab", icon: "sports_gymnastics" },
    { title: "Orthopedic Physio", icon: "skeleton" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FFFFFF] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Doctor's Photo (LEFT on Desktop) */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-slate-50 border border-slate-100">
                {!imageError ? (
                  <img 
                    src={doctorImg} 
                    alt="Dr. Harshith Kumar PT" 
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-brand-navy/20 p-8 text-center bg-[#F0F9FA]">
                    <span className="material-symbols-outlined text-7xl mb-4">person</span>
                    <p className="text-sm font-bold uppercase tracking-widest text-[#003B49]">Specialist Profile Image</p>
                  </div>
                )}
              </div>
              {/* Subtle accent decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-teal/5 rounded-full -z-10 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-navy/5 rounded-full -z-10 blur-xl"></div>
            </div>
          </div>

          {/* Text/Info Section (RIGHT on Desktop) */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#00A3AD] font-extrabold uppercase tracking-[0.2em] text-xs md:text-sm">
                Meet The Specialist
              </h3>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#003B49] leading-tight">
                Dr. Harshith Kumar PT
              </h2>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {['Bpt', 'COMT (Capri, Vadodara)', 'FCPR (DELHI)', 'FDM (Germany)'].map((credential) => (
                  <span key={credential} className="text-[10px] md:text-xs font-bold bg-[#F0F9FA] text-[#003B49] px-3 py-1.5 rounded-md border border-[#00A3AD]/20">
                    {credential}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl">
              Specialist in Manual Therapy, Sports Rehab, and Orthopedic Physiotherapy. With extensive training in Germany and India, 
              Dr. Harshith utilizes precision diagnostics and hands-on clinical mastery to restore movement and eliminate pain.
            </p>

            {/* Credibility Cards (The 3 boxes) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {specialties.map((item) => (
                <div 
                  key={item.title} 
                  className="bg-[#F0F9FA] p-4 rounded-xl border border-[#00A3AD] shadow-sm flex flex-col items-center text-center group hover:bg-[#E6F4F5] transition-colors"
                >
                  <span className="material-symbols-outlined text-[#00A3AD] mb-2 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div className="text-[#003B49] font-bold text-xs uppercase tracking-wider">{item.title}</div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button 
                onClick={onBookClick}
                className="w-full sm:w-auto bg-[#00A3AD] text-white px-10 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#003B49] transition-all shadow-md hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
