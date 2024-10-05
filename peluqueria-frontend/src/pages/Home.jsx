import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-green-200">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4">
        Bienvenido a Xtylo Peluquería
      </h1>
      <p className="text-base md:text-lg lg:text-xl mt-4 text-center px-4">
        Esta es la página de inicio.
      </p>
    </div>

    </Layout>

    
  );
};

export default Home;

