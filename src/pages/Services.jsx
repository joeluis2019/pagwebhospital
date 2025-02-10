import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { title: 'Tomografia', description: '24/7 emergency medical services' },
    { title: 'Rayos X', description: 'Electronic health record management' },
    { title: 'Laboratory', description: 'Advanced diagnostic services' },
    { title: 'Pharmacy', description: 'Integrated pharmacy management' },
    { title: 'Radiology', description: 'Digital imaging and diagnostics' },
    { title: 'Telemedicine', description: 'Remote healthcare services' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 shadow-xl border border-white/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
          <p className="text-white/90">{service.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Services;