import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source
            src="https://res.cloudinary.com/dp7eqwi5h/video/upload/v1775996479/newvideo_lqmpq1.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 text-center flex flex-col items-center">

     

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight text-white"
        >
          Premium Car <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">
            Detailing Services
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-12"
        >
          Experience the art of automotive perfection with our premium detailing, ceramic coatings, and precision care services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#book-now"
            className="btn-primary flex items-center justify-center gap-2 text-base"
          >
            Book Now
            <ChevronRight className="w-5 h-5" />
          </a>

          <a
            href="#services"
            className="btn-secondary flex items-center justify-center gap-2 text-base"
          >
            Explore Services
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;