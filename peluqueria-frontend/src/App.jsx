import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Peluqueria from './pages/Peluqueria';
import Novias from './pages/Novias';
import Unas from './pages/Unas';
import Navbar from './components/Navbar';
import Header from './components/Header'; // Nuevo componente para la imagen
import './styles/global.css'; // Archivo CSS global

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> {/* Añadir el Header aquí */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/peluqueria" element={<Peluqueria />} />
          <Route path="/servicios/novias" element={<Novias />} />
          <Route path="/servicios/unas" element={<Unas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
