import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryData = {
  detailing: [
    { type: 'image', src: 'https://res.cloudinary.com/dp7eqwi5h/image/upload/v1776083826/clarence-tioh-bwDfM793dFY-unsplash_gdorrn.jpg', alt: 'Car detailing 1' },
    { type: 'image', src: 'https://res.cloudinary.com/dp7eqwi5h/image/upload/v1776083861/shafiq-zxidi-x8mjfx1vjtI-unsplash_pip9wf.jpg', alt: 'Car detailing 2' },
    { type: 'image', src: 'https://res.cloudinary.com/dp7eqwi5h/image/upload/v1776084125/lucas-clarysse-XUo09J8yuN0-unsplash_stwair.jpg', alt: 'Car detailing 3' },
    { type: 'image', src: 'https://res.cloudinary.com/dp7eqwi5h/image/upload/v1776084165/pexels-orhunruzgaroz-6025950_hhw6zh.jpg', alt: 'Car detailing 4' },
  ],
  accessories: [
    { type: 'image', src: 'https://res.cloudinary.com/dp7eqwi5h/image/upload/v1776084253/milan-csizmadia-d665gpJZ-cY-unsplash_lczuda.jpg', alt: 'Accessories 1' },
    { type: 'image', src: 'https://res.cloudinary.com/dp7eqwi5h/image/upload/v1776084269/samuel-hagger-k6vFSWnBYKg-unsplash_vvui88.jpg', alt: 'Accessories 2' },
    { type: 'image', src: 'https://res.cloudinary.com/dp7eqwi5h/image/upload/v1776084481/pexels-ammy-k-106103999-12369534_bh3swt.jpg', alt: 'Accessories 3' },
    { type: 'image', src: 'https://res.cloudinary.com/dp7eqwi5h/image/upload/v1776084493/pexels-amar-9969500_dfqwse.jpg', alt: 'Accessories 4' },
  ]
};

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState('detailing');

  const items = galleryData[activeTab];

  return (
    <section id="gallery" className="py-28 px-4">
      <div className="container mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="section-heading">Our Gallery</h2>
          <p className="section-subheading">Explore our work and premium accessories</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10 flex-wrap">
          {['detailing', 'accessories'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 rounded-full capitalize text-sm sm:text-base transition-all ${
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(item)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
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
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white"
              onClick={() => setSelected(null)}
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
            >
              <img src={selected.src} alt={selected.alt} className="w-full h-full object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;