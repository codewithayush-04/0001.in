import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'BMW 5 Series Owner',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Absolutely blown away by the ceramic coating job. My car looks better than when I first bought it. The attention to detail is unmatched!',
  },
  {
    name: 'Priya Patel',
    role: 'Mercedes C-Class Owner',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'The interior detailing was incredible. Every inch of the car was cleaned and conditioned. The leather feels brand new. Highly recommend!',
  },
  {
    name: 'Arjun Mehta',
    role: 'Audi Q7 Owner',
   avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    rating: 5,
    text: 'Best car detailing service I have ever used. The paint correction removed years of swirl marks. Professional team and amazing results.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Range Rover Owner',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'Outstanding service from start to finish. The team was professional, punctual, and the results speak for themselves. Will definitely return.',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
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
              className="glass-card p-10 md:p-14 text-center relative"
            >
              <Quote className="w-10 h-10 text-blue-500/30 absolute top-6 left-6" />

              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-blue-500/30 object-cover"
              />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <h4 className="text-lg font-bold text-white">{testimonials[current].name}</h4>
              <p className="text-sm text-gray-400">{testimonials[current].role}</p>
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
