import { useState } from "react";
import { motion } from "framer-motion";

import webImage from '../assets/pngwing.com.png'; 

const categories = ["Web", "Móvil", "Diseño"];
const projects = [
  { category: "Web", image: webImage , title: "Proyecto Web 1" },
  { category: "Móvil", image: "/images/mobile1.jpg", title: "App Móvil 1" },
  { category: "Diseño", image: "/images/design1.jpg", title: "Diseño Gráfico 1" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Web");

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Nuestro Portafolio</h2>
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded ${
                activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {projects
            .filter((project) => project.category === activeCategory)
            .map((project, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="shadow-lg">
                <img src={project.image} alt={project.title} className="rounded-t-lg" />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
