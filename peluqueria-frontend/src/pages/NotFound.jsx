import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "/assets/images/error404.jpg";

function NotFound() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center 
                 bg-contain sm:bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Capa semi-transparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Contenido */}
      <div className="text-center relative z-10 text-white px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-4">
          Página no encontrada
        </h2>
        <p className="text-sm sm:text-base mb-4 sm:mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link 
          to="/" 
          className="inline-block px-4 sm:px-6 py-2 sm:py-3 
                     bg-blue-600 hover:bg-blue-700 
                     transition-colors duration-300 rounded-lg 
                     text-sm sm:text-base text-white"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFound;