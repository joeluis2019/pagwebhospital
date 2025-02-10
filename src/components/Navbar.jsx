import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaBattleNet } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Inicio', path: '/' },
   /* { title: 'Gallery', path: '/gallery' }, */
    { title: 'Computadoras', path: '/nodes' },
   /* { title: 'Gallery', path: '/gallery' }, */
  ];

  return (
    <nav className="glass-card border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">

    <FaBattleNet size={35} className="text-white animate-spin-slow" />
  
</Link>
          

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white hover:text-orange-900 transition-colors"
              >
                <motion.div whileHover={{ y: -2 }}>
                  {item.title}
                </motion.div>
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="gradient-button"
            >
              Connect
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 p-2"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full mt-4 gradient-button"
              >
                Connect
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;