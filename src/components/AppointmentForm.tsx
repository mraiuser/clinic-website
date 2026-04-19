import BookingForm from './BookingForm';

export default function AppointmentForm() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-ice-blue border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <span className="text-brand-teal font-bold uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4 block">Request a Visit</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 md:mb-6">Make an Appointment</h2>
          <p className="text-slate-500 mb-8 md:mb-10 text-base md:text-lg leading-relaxed font-medium">
            Consult with our elite spinal specialists. We combine diagnostic precision with personalized rehabilitation plans to ensure you get back to your best self.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            <li className="flex items-center gap-4">
              <div className="bg-brand-teal/10 rounded-full p-1.5 flex shrink-0">
                <span className="material-symbols-outlined text-brand-teal text-xl">check</span>
              </div>
              <span className="font-semibold text-brand-navy text-sm md:text-base">24 Hour Service Available</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="bg-brand-teal/10 rounded-full p-1.5 flex shrink-0">
                <span className="material-symbols-outlined text-brand-teal text-xl">check</span>
              </div>
              <span className="font-semibold text-brand-navy text-sm md:text-base">Expert Spine Therapists</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100 w-full overflow-hidden">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
