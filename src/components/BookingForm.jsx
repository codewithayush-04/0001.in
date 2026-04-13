import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone as PhoneIcon, ArrowRight, Check, Loader2 } from 'lucide-react';

const serviceOptions = [
  { value: 'car-wash', label: 'Car Wash — ₹299' },
  { value: 'interior', label: 'Interior Cleaning — ₹999' },
  { value: 'ceramic', label: 'Ceramic Coating — ₹4,999' },
  { value: 'polishing', label: 'Polishing — ₹1,999' },
  { value: 'PPF', label: 'PPF Starting from — ₹59,999' },
  { value: 'Accessories', label: 'Accessories — ₹999' },
];

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const selectedService = serviceOptions.find(
      (s) => s.value === formData.service
    );

    const message = `🚗 *New Booking Request - 0001 Cars*\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n🔧 Service: ${selectedService?.label}\n📅 Date: ${formData.date}\n⏰ Time: ${formData.time}`;

    const whatsappNumber = "917769970001";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    setLoading(false);
    setStep(3);
  };

  return (
    <section id="book-now" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-3xl">

        <motion.div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">Book Your Service</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Reserve your appointment in seconds via WhatsApp.
          </p>
        </motion.div>

        <div className="glass-card p-4 sm:p-6 md:p-10 rounded-2xl">

          {/* Steps */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`w-7 h-7 sm:w-8 sm:h-8 text-sm rounded-full flex items-center justify-center ${
                s <= step ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
              }`}>
                {s < step ? <Check className="w-4 h-4" /> : s}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-5">

              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="input-field w-full text-sm sm:text-base"
              >
                <option value="">Select Service</option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="input-field w-full"
                />
                <input
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="input-field w-full"
                />
              </div>

              <button type="submit" className="btn-primary w-full py-3 text-sm sm:text-base">
                Next <ArrowRight className="inline ml-2" />
              </button>
            </form>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field pl-9 sm:pl-10 w-full text-sm sm:text-base"
                />
              </div>

              <div className="relative">
                <PhoneIcon className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field pl-9 sm:pl-10 w-full text-sm sm:text-base"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <button type="button" onClick={() => setStep(1)} className="text-sm sm:text-base">
                  Back
                </button>

                <button type="submit" className="btn-primary flex items-center justify-center gap-2 py-3 text-sm sm:text-base w-full sm:w-auto">
                  {loading ? <Loader2 className="animate-spin w-4 h-4" /> : "Confirm Booking"}
                </button>
              </div>
            </form>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="text-center py-8 sm:py-10">
              <Check className="w-10 h-10 sm:w-12 sm:h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold">Redirected to WhatsApp</h3>
              <p className="text-gray-400 text-sm sm:text-base">Please send the message to confirm booking.</p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default BookingForm;