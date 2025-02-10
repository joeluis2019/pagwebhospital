import { motion } from "framer-motion";

const stats = [
  { icon: "🏆", label: "Proyectos Completados", value: "120+" },
  { icon: "👥", label: "Clientes Felices", value: "80+" },
];
const team = [
  { name: "Juan Pérez", role: "CEO", image: "/images/team1.jpg" },
  { name: "Ana Gómez", role: "Diseñadora Gráfica", image: "/images/team2.jpg" },
];

export default function AboutPage() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Acerca de Nosotros</h2>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-500 text-5xl">{stat.icon}</div>
              <h3 className="text-xl font-bold">{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Equipo */}
        <h3 className="text-xl font-bold mb-6">Nuestro Equipo</h3>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {team.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img src={member.image} alt={member.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h4 className="font-semibold">{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
