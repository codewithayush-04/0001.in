import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sofa, Shield, Paintbrush, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Car Wash',
    desc: 'Complete hand wash with premium shampoo and tire dressing.',
    price: '₹499',
    color: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/30',
    bgColor: 'bg-cyan-500/10',
  },
 
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Ceramic Coating',
    desc: 'Long-lasting protection with high-gloss finish.',
    price: '₹4,999',
    color: 'text-blue-400',
    borderColor: 'hover:border-blue-500/30',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: 'Polishing',
    desc: 'Remove scratches and restore paint shine.',
    price: '₹1,999',
    color: 'text-amber-400',
    borderColor: 'hover:border-amber-500/30',
    bgColor: 'bg-amber-500/10',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'PPF (Paint Protection Film)',
    desc: 'Protect your car from scratches and damage.',
    price: '₹59,999+',
    color: 'text-indigo-400',
    borderColor: 'hover:border-indigo-500/30',
    bgColor: 'bg-indigo-500/10',
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Tyre Alignment/Replacement',
    desc: 'Improve handling and increase tyre life.',
    price: '₹799',
    color: 'text-green-400',
    borderColor: 'hover:border-green-500/30',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: <Sofa className="w-8 h-8" />,
    title: 'Car Accessories',
    desc: 'Upgrade your car with premium accessories.',
    price: '₹999+',
    color: 'text-pink-400',
    borderColor: 'hover:border-pink-500/30',
    bgColor: 'bg-pink-500/10',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section id="services" className="py-28 relative">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Professional car care with advanced tools and premium quality service.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`glass-card p-8 flex flex-col ${service.borderColor} transition-all duration-300`}
            >
              <div className={`${service.bgColor} p-4 rounded-xl mb-4`}>
                <div className={service.color}>{service.icon}</div>
              </div>

              <h3 className="text-xl font-bold mb-2">{service.title}</h3>

              <p className="text-gray-400 text-sm mb-6">
                {service.desc}
              </p>

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                <span className={`text-xl font-bold ${service.color}`}>
                  {service.price}
                </span>

                <a
                  href="#book-now"
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-white"
                >
                  Book <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;