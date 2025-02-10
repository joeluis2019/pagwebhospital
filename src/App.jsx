import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Nodes from './pages/Nodes';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-400 to-blue-600">
        <Navbar />
        <div className="container mx-auto p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/nodes" element={<Nodes />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;