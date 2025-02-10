import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { id: 1, url: 'https://source.unsplash.com/800x600/?hospital', title: 'Main Entrance' },
    { id: 2, url: 'https://source.unsplash.com/800x600/?doctor', title: 'Medical Staff' },
    { id: 3, url: 'https://source.unsplash.com/800x600/?laboratory', title: 'Laboratory' },
    { id: 4, url: 'https://source.unsplash.com/800x600/?medical-equipment', title: 'Equipment' },
    { id: 5, url: 'https://source.unsplash.com/800x600/?surgery', title: 'Operating Room' },
    { id: 6, url: 'https://source.unsplash.com/800x600/?nurse', title: 'Nursing Station' },
  ];

  return (
    <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 shadow-xl border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-6">Hospital Gallery</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={image.url}
              alt={image.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white font-semibold">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

