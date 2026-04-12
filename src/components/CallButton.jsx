import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const CallButton = () => {
  return (
    <motion.a
      href="tel:+917769970001"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 group"
      aria-label="Call Now"
    >
      <Phone className="w-7 h-7 text-white group-hover:animate-bounce" />
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping" />
    </motion.a>
  );
};

export default CallButton;
