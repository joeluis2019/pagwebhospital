import { motion } from "framer-motion";

const services = [
  { icon: "⚙️", title: "Desarrollo Web", description: "Creamos sitios web modernos y funcionales." },
  { icon: "📱", title: "Aplicaciones Móviles", description: "Desarrollamos apps móviles nativas y multiplataforma." },
  { icon: "🎨", title: "Diseño Gráfico", description: "Diseños atractivos y personalizados para tu marca." },
];

export default function ServicesPage() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
