import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import nodes from '../nodos';
import { MdOutlineArrowForwardIos } from "react-icons/md";


const Nodes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const nodesPerPage = 6;

  // Filter nodes based on search term
  const filteredNodes = nodes.filter(node =>
    node.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastNode = currentPage * nodesPerPage;
  const indexOfFirstNode = indexOfLastNode - nodesPerPage;
  const currentNodes = filteredNodes.slice(indexOfFirstNode, indexOfLastNode);
  const totalPages = Math.ceil(filteredNodes.length / nodesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 shadow-xl border border-white/20 ">
      <div className='justify-between flex items-center mb-6'>
        <h2 className="text-2xl font-bold text-white">Computadoras Hospital</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search computers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" pl-10 pr-4 py-2 bg-white/5 border border-white/60 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
        </div>
      </div>
      
      <div className="grid gap-4">
        {currentNodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-lg p-4 border border-white/10 glow-card"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white font-semibold flex items-center mx-auto text-xl"><MdOutlineArrowForwardIos size={15} className='mr-1'/> {node.name}</h3>
                <p className="text-white/70">Total Computadoras: {node.computers}</p>
                <p className="text-white/70">Rotas: {node.rota}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-green-900/70 text-white">
                {node.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-8 h-8 rounded-lg ${
                currentPage === index + 1
                  ? 'bg-white/20 text-white'
                  : 'bg-white/5 text-white/70'
              } border border-white/10`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
     
    </div>

    
  );
};
export default Nodes;