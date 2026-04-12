import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Loader2, Check } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Have questions? Reach out to us and we'll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Name</label>
                <input type="text" required placeholder="Your full name" className="input-field" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Email</label>
                <input type="email" required placeholder="Your@gmail.com" className="input-field" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Message</label>
                <textarea required rows={4} placeholder="Your message..." className="input-field resize-none" />
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
                {loading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : submitted ? (
                  <><Check className="w-4 h-4" /> Sent!</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </button>
            </form>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <a href="tel:+91 77699 70001" className="glass-card p-4 flex items-center gap-3 hover:border-blue-500/30 transition-colors group">
                <Phone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-gray-400">Call Us</div>
                  <div className="text-sm text-white font-medium">+91 77699 70001</div>
                </div>
              </a>
              <a href="mailto:0001carsdetailingstudio@gmail.com" className="glass-card p-4 flex items-center gap-3 hover:border-blue-500/30 transition-colors group">
                <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-gray-400">Email</div>
                  <div className="text-sm text-white font-medium">0001carsdetailing
                    studio@gmail.com</div>
                </div>
              </a>
              <div className="glass-card p-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-xs text-gray-400">Location</div>
                  <div className="text-sm text-white font-medium">Argora Chowk, Ranchi Jharkhand, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Map + Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
          <div className="glass-card overflow-hidden flex-grow rounded-xl" style={{ minHeight: '400px' }}>
  <iframe
    title="Location Map"
    src="https://www.google.com/maps?q=0001+cars&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0, minHeight: '400px' }}
    allowFullScreen=""
    loading="lazy"
  />
</div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/0001__cars/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex-1 p-4 flex items-center justify-center gap-3 hover:border-pink-500/30 transition-all group"
              >
                <svg className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm font-medium text-gray-300">Instagram</span>
              </a>
              <a
               href="https://wa.me/917769970001"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex-1 p-4 flex items-center justify-center gap-3 hover:border-green-500/30 transition-all group"
              >
                <svg className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-sm font-medium text-gray-300">WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
