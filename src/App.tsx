import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PetManagement from './pages/PetManagement';
import Appointments from './pages/Appointments';
import Mall from './pages/Mall';
import Community from './pages/Community';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<PetManagement />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/mall" element={<Mall />} />
            <Route path="/community" element={<Community />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;