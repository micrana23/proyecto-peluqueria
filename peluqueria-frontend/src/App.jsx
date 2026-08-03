import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

const Home = lazy(() => import("./pages/Home"));
const Servicios = lazy(() => import("./pages/Servicios"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Peluqueria = lazy(() => import("./pages/Peluqueria"));
const Novias = lazy(() => import("./pages/Novias"));
const Unas = lazy(() => import("./pages/Unas"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function App() {
  return (
    <Router>
      <div className="app">
        <Suspense fallback={<div>Cargando...</div>}>
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
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
