import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import FloatingSidebar from './components/FloatingSidebar';
import Specialist from './components/Specialist';
import BookingForm from './components/BookingForm';

function FaqItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
      <button 
        className="w-full flex justify-between items-center p-5 md:p-6 text-left cursor-pointer transition-colors hover:bg-surface-container-low focus:outline-none min-h-[48px]"
        onClick={onClick}
      >
        <h4 className="font-bold text-brand-navy text-sm md:text-base">{question}</h4>
        <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="p-5 md:p-6 pt-0 text-on-surface-variant text-xs md:text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFaqClick = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long is a typical treatment plan?",
      answer: "Most plans range from 4 to 12 weeks depending on the severity of the condition and your recovery goals."
    },
    {
      question: "Do you focus only on machines?",
      answer: "No, we believe in advanced manual therapy. While we use evidence-based modalities where necessary, our primary focus is hands-on care."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring any previous imaging results (X-rays, MRIs), a list of medications, and wear comfortable clothing that allows for easy movement."
    }
  ];

  return (
    <>
      <Header onBookClick={toggleModal} />
      <FloatingSidebar />
      
      <main className="pb-16 md:pb-0">
        <Hero onBookClick={toggleModal} />
        
        <AppointmentForm />
        
        <Services />
        
        <Specialist onBookClick={toggleModal} />

        {/* Pricing/FAQ Section */}
        <section className="py-12 md:py-24 bg-ice-blue">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 md:mb-8 leading-tight">Expert Care & Recovery</h2>
              <p className="text-slate-600 mb-6 md:mb-10 text-base md:text-lg">Our pricing model is transparent, designed to make high-end manual therapy accessible for your long-term health journey.</p>
              
              <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="material-symbols-outlined text-brand-teal text-xl md:text-2xl">verified</span>
                  <p className="text-brand-navy font-medium text-base md:text-lg italic leading-snug">"Dr. Harshith's hands-on approach fixed my chronic back pain in just 3 sessions. No machines needed!"</p>
                </div>
                <div className="ml-10 md:ml-12 text-xs md:text-sm font-bold text-slate-500">— Aravind Sharma</div>

                <div className="flex items-start gap-3 md:gap-4 pt-2 md:pt-4">
                  <span className="material-symbols-outlined text-brand-teal text-xl md:text-2xl">verified</span>
                  <p className="text-brand-navy font-medium text-base md:text-lg italic leading-snug">"Best sports rehab in the city. Highly recommend for manual therapy."</p>
                </div>
                <div className="ml-10 md:ml-12 text-xs md:text-sm font-bold text-slate-500">— Priyanka Reddy</div>
              </div>
              
              <button 
                onClick={toggleModal}
                className="w-full sm:w-auto bg-brand-teal text-white px-8 md:px-10 py-3.5 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-brand-teal/90 transition-all shadow-lg min-h-[48px]"
              >
                Book Your Consultation
              </button>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-navy mb-4 md:mb-6">Frequently Asked Questions</h3>
              {faqs.map((faq, idx) => (
                <FaqItem 
                  key={idx} 
                  question={faq.question} 
                  answer={faq.answer} 
                  isOpen={openFaqIndex === idx}
                  onClick={() => handleFaqClick(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Media/Awards Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h3 className="text-center text-slate-400 uppercase tracking-widest text-[10px] md:text-sm font-bold mb-8 md:mb-12">Certified & Recognized By</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
               <div className="text-center font-bold text-slate-400 text-sm md:text-xl">IAP Certified</div>
               <div className="text-center font-bold text-slate-400 text-sm md:text-xl">COMT Certified</div>
               <div className="text-center font-bold text-slate-400 text-sm md:text-xl">Manual Specialist</div>
               <div className="text-center font-bold text-slate-400 text-sm md:text-xl">Sports Rehab Expert</div>
            </div>
          </div>
        </section>
      </main>

      <Footer onBookClick={toggleModal} />
      <StickyMobileBar />

      {/* Booking Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-navy/30 backdrop-blur-sm overflow-y-auto"
          onClick={toggleModal}
        >
          <div 
            className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl p-6 md:p-10 border border-slate-100 transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={toggleModal}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-brand-teal transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            
            <div className="mb-6 md:mb-8 border-l-4 border-brand-teal pl-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-1 md:mb-2">Book Your Visit</h2>
              <p className="text-sm md:text-base text-slate-600">Fill in the details below and Dr. Harshith's team will contact you shortly.</p>
            </div>
            
            <BookingForm onCancel={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
}
