import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Yash Sahu',
    role: 'Mahindra XUV700 Owner',
    avatar: '',
    rating: 5,
    text: 'Got PPF + Ceramic coating done on my Scorpio N – totally worth it! The finish looks amazing and gives solid protection. The staff was super friendly and professional throughout the process. Loved how they explained everything and handled the car with proper care. Highly recommended!',
  },
  {
    name: 'Sunil Horo',
    role: 'Tyre Consultant',
    avatar: '',
    rating: 5,
    text: 'Best Yokohama tyre and washing services in Khunti. Thank you 0001 team!',
  },
  {
    name: 'Kartik Ram',
    role: 'Tyre Alignment',
    avatar: '',
    rating: 5,
    text: 'Alignment service is good & Yokohama tyres at genuine rate.',
  },
  {
    name: 'Ankura Sinku',
    role: 'Mahindra Thar Owner',
    avatar: '',
    rating: 5,
    text: 'I found the service at 0001 Cars to be quite reasonable. Overall experience was good. Definitely worth considering!',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const currentTestimonial = testimonials[current];

  // 🔥 Generate initials
  const initials = currentTestimonial.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="section-subheading">
            Don't just take our word for it — hear from our satisfied customers.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-14 text-center relative"
            >
              <Quote className="w-10 h-10 text-blue-500/30 absolute top-6 left-6" />

              {/* Avatar (Image or Initials) */}
              {currentTestimonial.avatar ? (
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-blue-500/30 object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-xl font-semibold bg-gradient-to-br from-blue-500 to-indigo-600">
                  {initials}
                </div>
              )}

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                "{currentTestimonial.text}"
              </p>

              <h4 className="text-lg font-bold text-white">{currentTestimonial.name}</h4>
              <p className="text-sm text-gray-400">{currentTestimonial.role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-blue-500 w-8' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;