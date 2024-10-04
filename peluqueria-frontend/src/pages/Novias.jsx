import React from 'react';
import Layout from '../components/Layout';

const Novias = () => {
  return (
    <Layout>
      <div className="relative">
        {/* Imagen de fondo */}
        <img
          src="/assets/images/novia3.webp"
          alt="Descripción de la imagen"
          className="w-full h-auto object-cover relative -mt-16 z-0"
        />
        
        {/* Texto superpuesto en el centro con fuente elegante */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold shadow-lg font-playfair">
            Servicio Integral de Novias
          </h1>
        </div>

        {/* Contenido por debajo del texto */}
        <div className="relative z-20 p-4">
          <h1 className="text-black">Novias</h1>
          <p className="text-black">Servicios de novias...</p>
        </div>
      </div>
    </Layout>
  );
};

export default Novias;
