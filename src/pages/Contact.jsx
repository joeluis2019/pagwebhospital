import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Contáctanos</h2>

        {/* Información */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p>📍 Dirección: Calle Falsa #123</p>
          <p>📞 Teléfono: +34 123456789</p>
          <p>✉️ Email: contacto@empresa.com</p>
        </motion.div>

        {/* Formulario */}
        <form action="#" method="POST" className="bg-white shadow-lg rounded-lg p-6">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
          <input type="text" id="name" name="name" required placeholder="Tu nombre" 
                 className="w-full border border-gray-300 rounded p-2 mb-4 focus:ring focus:ring-blue-300"/>

          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input type="email" id="email" name="email" required placeholder="Tu email"
                 className="w-full border border-gray-300 rounded p-2 mb-4 focus:ring focus:ring-blue-300"/>

          <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
          <textarea id="message" name="message" rows={5} required placeholder="Escribe tu mensaje"
                    className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"></textarea>

          {/* Botón */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Enviar
          </motion.button>
        </form>
      </div>
    </div>
  );
}
