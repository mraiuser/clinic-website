import { useState } from 'react';

export default function BookingForm({ onCancel }: { onCancel?: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Manual Therapy Session',
    timing: 'Today',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw-LXYDwEo0ME2efOC1gZU9tiNDwO8FudvDXd1T-QUx1PSnc5pkODhvEdeGBCsPCXnNWg/exec';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const urlParams = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        urlParams.append(key, value);
      });

      await fetch(scriptURL, { 
        method: 'POST', 
        body: urlParams,
        mode: 'no-cors'
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        treatment: 'Manual Therapy Session',
        timing: 'Today',
        message: ''
      });
      
      setIsSuccess(true);
    } catch (err) {
      console.error('Error!', err);
      setError('Connection issue. Please call us directly at +91 9948834312.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-10 animate-fade-in">
        <div className="w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-brand-teal text-5xl">verified</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-4">Booking Received!</h3>
        <p className="text-slate-600 text-lg">
          Thank you! Dr. Harshith will contact you shortly.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <button 
            onClick={() => setIsSuccess(false)}
            className="text-brand-teal font-bold hover:underline"
          >
            Need another appointment?
          </button>
          {onCancel && (
            <button 
              onClick={onCancel}
              className="text-slate-400 text-sm hover:underline"
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label className="block text-xs md:text-sm font-bold text-brand-navy mb-2">Full Name</label>
          <input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-ice-blue border-none focus:ring-2 focus:ring-brand-teal rounded-lg p-3 md:p-4 text-sm md:text-base font-medium" 
            placeholder="John Doe" 
            required 
            type="text" 
          />
        </div>
        <div>
          <label className="block text-xs md:text-sm font-bold text-brand-navy mb-2">Phone Number</label>
          <input 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-ice-blue border-none focus:ring-2 focus:ring-brand-teal rounded-lg p-3 md:p-4 text-sm md:text-base font-medium" 
            placeholder="97005XXXXX" 
            required 
            type="tel" 
          />
        </div>
      </div>

      <div>
        <label className="block text-xs md:text-sm font-bold text-brand-navy mb-2">Email Address</label>
        <input 
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-ice-blue border-none focus:ring-2 focus:ring-brand-teal rounded-lg p-3 md:p-4 text-sm md:text-base font-medium" 
          placeholder="john@example.com" 
          required 
          type="email" 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label className="block text-xs md:text-sm font-bold text-brand-navy mb-2">Select Treatment</label>
          <select 
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            className="w-full bg-ice-blue border-none focus:ring-2 focus:ring-brand-teal rounded-lg p-3 md:p-4 text-sm md:text-base font-medium h-[48px] md:h-[56px] appearance-none cursor-pointer"
          >
            <option>Manual Therapy Session</option>
            <option>Back Pain Treatment</option>
            <option>Sports Injury Rehab</option>
            <option>Dry Needling</option>
            <option>Home Visit</option>
            <option>Consultation</option>
          </select>
        </div>
        <div>
          <label className="block text-xs md:text-sm font-bold text-brand-navy mb-2">Preferred Timing</label>
          <select 
            name="timing"
            value={formData.timing}
            onChange={handleChange}
            required
            className="w-full bg-ice-blue border-none focus:ring-2 focus:ring-brand-teal rounded-lg p-3 md:p-4 text-sm md:text-base font-medium h-[48px] md:h-[56px] appearance-none cursor-pointer"
          >
            <option>Today</option>
            <option>Tomorrow</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs md:text-sm font-bold text-brand-navy mb-2">Message (Optional)</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-ice-blue border-none focus:ring-2 focus:ring-brand-teal rounded-lg p-3 md:p-4 text-sm md:text-base font-medium" 
          placeholder="Describe your condition..." 
          rows={3}
        ></textarea>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-bold border border-red-100 italic">
          {error}
        </div>
      )}

      <button 
        disabled={isSubmitting}
        className="w-full bg-brand-teal text-white py-4 md:py-5 rounded-lg font-bold text-lg md:text-xl hover:bg-brand-teal/90 transition-all shadow-lg min-h-[48px] flex items-center justify-center gap-3 disabled:bg-slate-400 disabled:cursor-not-allowed" 
        type="submit"
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            Booking your spot...
          </>
        ) : 'Confirm Appointment Request'}
      </button>
    </form>
  );
}
