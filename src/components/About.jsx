import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: <Users className="w-6 h-6" />, value: '2,500+', label: 'Happy Clients' },
  { icon: <Award className="w-6 h-6" />, value: '8+', label: 'Years Experience' },
  { icon: <Clock className="w-6 h-6" />, value: '5,000+', label: 'Cars Detailed' },
  { icon: <ThumbsUp className="w-6 h-6" />, value: '99%', label: 'Satisfaction Rate' },
];

const About = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-950/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=700&h=500&fit=crop"
                alt="Car detailing"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500/20 rounded-2xl -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 glass-card p-5"
            >
              <div className="text-3xl font-bold text-blue-400">8+</div>
              <div className="text-sm text-gray-400">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Crafting Automotive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Perfection
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              At 0001 Cars, we blend artistry with science to deliver unparalleled car care.
              Our team uses premium products and advanced techniques to give every vehicle the attention it deserves.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              From basic cleaning to deep detailing, every service is performed with precision and passion.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {['Certified Professionals', 'Eco-Friendly', 'Guaranteed', 'Premium Quality'].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center">
              <div className="text-blue-400 flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28 glass-card p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-10"
        >
          {/* Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-blue-500/30">
            <img
              src="public/shva.jpg"
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Founder's Perspective
            </h3>

            <p className="text-gray-400 mb-4">
              "0001 Cars is not just a business — it's a passion. Every car we work on reflects our dedication to perfection.
              We aim to deliver not just service, but an experience that car lovers truly value."
            </p>

            <div className="text-blue-400 font-semibold">
              — Shivanand Kashyap
            </div>
            <div className="text-sm text-gray-500">
              Founder,CEO, 0001 Cars
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;