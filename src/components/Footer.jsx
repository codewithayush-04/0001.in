import React from 'react';
import { Car } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#060608] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
           <a href="#home" className="flex items-center gap-2 mb-4">
  <img 
    src="public/SHIVA MOTO CORP logo.png"   // put your logo path here
    alt="0001 Cars Logo"
    className="w-7 h-7 object-contain"
  />
  <span className="text-xl font-bold tracking-[0.2em] text-white">
    0001 CARS
  </span>
</a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              The premier destination for luxury automotive care and premium detailing services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              {[
                { name: 'Instagram', href: 'https://www.instagram.com/0001__cars/' },
                { name: 'WhatsApp', href: 'https://wa.me/7769970001' },
                { name: 'Facebook', href: 'https://facebook.com' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-400 text-sm font-medium transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} 0001 CARS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
