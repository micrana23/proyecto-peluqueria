import React from 'react';
import Layout from '../components/Layout';

const Novias = () => {
  return (
    <Layout>
      <div>
        <img
          src="/assets/images/novia.webp" // Ruta directa desde la raíz
          alt="Descripción de la imagen"
          className="w-full h-auto mb-4" // Clases para hacer la imagen responsiva
        />
        <h1>Novias</h1>
        <p>Servicios de novias...</p>
      </div>
    </Layout>
  );
};

export default Novias;

