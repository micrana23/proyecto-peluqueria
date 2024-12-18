import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Peluqueria from "./pages/Peluqueria";
import Novias from "./pages/Novias";
import Unas from "./pages/Unas";
import NotFound from "./pages/NotFound";
import "./styles/global.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/peluqueria" element={<Peluqueria />} />
          <Route path="/servicios/novias" element={<Novias />} />
          <Route path="/servicios/unas" element={<Unas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
