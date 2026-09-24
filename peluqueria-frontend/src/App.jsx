import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Peluqueria = lazy(() => import("./pages/Peluqueria"));
const Novias = lazy(() => import("./pages/Novias"));
const Unas = lazy(() => import("./pages/Unas"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <ErrorBoundary>
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios/peluqueria" element={<Peluqueria />} />
              <Route path="/servicios/novias" element={<Novias />} />
              <Route path="/servicios/unas" element={<Unas />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
