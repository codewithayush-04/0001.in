import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const galleryData = {
  detailing: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop', alt: 'Red sports car detailing' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop', alt: 'Luxury car front view' },
    { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop', alt: 'Detailing process video' },
    { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop', alt: 'Detailing process video' },
  ],
  accessories: [
    { type: 'image', src: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&h=400&fit=crop', alt: 'Car accessories kit' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=400&fit=crop', alt: 'Car seat covers' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&h=400&fit=crop', alt: 'Car lighting accessories' },
   { type: 'image', src: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=400&fit=crop', alt: 'Car seat covers' },
  ]
};

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState('detailing');

  const items = galleryData[activeTab];

  return (
    <section id="gallery" className="py-28 relative">
      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="section-heading">Our Gallery</h2>
          <p className="section-subheading">Explore our work and premium accessories</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {['detailing', 'accessories'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(item)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
            >
              <img
                src={item.type === 'video' ? item.thumbnail : item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />

              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setSelected(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
            >
              {selected.type === 'image' ? (
                <img src={selected.src} alt={selected.alt} className="w-full h-full object-contain" />
              ) : (
                <video src={selected.src} controls autoPlay className="w-full h-full" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;