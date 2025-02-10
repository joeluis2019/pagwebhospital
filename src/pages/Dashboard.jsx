import React from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDropright } from "react-icons/io";
import { SiTraefikproxy } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const Dashboard = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <div className='drop-shadow-lg'>
          <h1 className="text-7xl font-bold mb-6">
            <span className="gradient-text">NODO</span>
            <br />
            <span className="gradient-text">HOSPITAL ERNESTO GUEVARA</span>
          </h1>
        </div>


      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glow-card p-6"
        >
          <div className='flex justify-between mx-4'>
            <h2 className="text-gray-900 mb-2 font-bold text-xl mx-4">Total Servidores</h2>
            <h2 className="text-gray-900 mb-2 font-bold text-xl ">Estado</h2>
          </div>

          <div className="flex justify-between items-center">
            <div className='flex justify-center items-center'>
              <IoIosArrowDropright size={25} className='mx-2' />
              <span className="text-xl font-bold">11 SERVIDORES</span>
            </div>

            <div className='ml-30 text-xl'>
              <span className="text-white">10 Funcionando</span>
              <span className=" mx-4 text-white">1 Roto</span>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glow-card p-6"
        >
          <div className='flex justify-between mx-4'>
            <h2 className="text-gray-900 mb-2 font-bold text-xl mx-4">Servidores Profesionales</h2>
            <h2 className="text-gray-900 mb-2 font-bold text-xl mx-4">Estado</h2>
          </div>

          <div className="flex justify-between items-center">
            <div className='flex justify-center items-center'>
              <IoIosArrowDropright size={25} className='mx-2' />
              <span className="text-xl font-bold">6 SERVIDORES</span>
            </div>

            <div className='ml-30 text-xl'>
              <span className="text-white">5 Funcionando</span>
              <span className=" mx-4 text-white">1 Roto</span>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Main Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="gradient-border"
      >
        <div className="glow-card glass-card p-8">
          <h2 className="text-gray-900 mb-4 font-bold text-xl">CANTIDAD DE COMPUTADORAS HEG</h2>
          <hr className='mx-2' />
          <div className='flex justify-between'>
            <div className="text-4xl font-bold mb-4 mt-4">104</div>
            <div className="text-2xl mx-0 border-none  md:grid grid-cols-3 gap-4 pt-2">
              <div className='flex justify-center items-center'>
              <FaArrowCircleRight className='mx-1 mt-2' /> 
                <div className="text-2xl text-white font-bold mt-2 mx-1">15 ROTAS</div>

              </div>
              <div className='flex justify-center items-center '>
              <FaArrowCircleRight className='mx-1 mt-2' /> 
                <div className="text-2xl text-white font-bold mt-2 mx-2">4 ROBOS</div>

              </div>

            </div>
          </div>

        </div>
      </motion.div>

      {/* Features Grid */}
      <div>
        <h2 className="text-4xl text-white font-bold mb-8 text-center">Desglose de los Servidores</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {[
            '-Proxy 192.168.0.1 ',
            '-Tomografo 192.168.0.2',
            '-Almacen Tomografo 192.168.0.3',
            '-Web FTP 192.168.0.5',
            '-Maquinas Virtuales 192.168.0.6',
            '-Dns DHCP 192.168.0.7',
            '-Clientes Ligeros 192.168.0.8',
            '-DHCP 192.168.0.9',
            '-Promox 192.168.0.11',
            '-Rayos X 192.168.0.14',
            '-Versat 192.168.0.12'

          ].map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glow-card p-2 text-center cursor-pointer "
            >
              <div className='bg-slate-600 p-3 rounded-xl flex justify-center items-center hover:scale-105 '>
                <SiTraefikproxy size={25} />
                <h3 className="text-white">{service}</h3>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
      <div className='flex justify-center'>
  <FaArrowUp size={40} onClick={ handleScrollToTop} className='text-white shadow-2xl border-2 border-blue-800 bg-black p-2 rounded-full animate-bounce drop-shadow-2xl'/>
</div>
    
    </div>
  );
};

export default Dashboard;