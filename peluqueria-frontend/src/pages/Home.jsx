import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Contenedor de fondo con la imagen */}
      <div
        className="relative flex flex-col items-center justify-center w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('../../public/assets/images/fondo verde.webp')",
        }} // Cambia el nombre del archivo
      >
        {/* Imagen centrada encima del fondo, ahora redonda */}
        <img
          src="../../public/assets/images/logo portada.png"
          alt="Imagen centrada"
          className="absolute w-40 h-40 sm:w-44 sm:h-44 md:w-64 md:h-64 lg:w-72 lg:h-72 z-10 rounded-full object-cover"
          style={{
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -30%)",
          }}
        />

        {/* Frase justo debajo del logo */}
        <h1 className="custom-h1 text-white z-20 mt-2 md:mt-12 lg:mt-32 text-center">
          Bienvenido a Xtylo Peluquería
        </h1>
      </div>

      {/* Contenedor adicional debajo del texto */}
      <div className="relative z-20 mt-10 text-center px-4">
        <p className="text-base md:text-lg lg:text-xl mt-4 text-black">
          Esta es la página de inicio.
        </p>

        {/* Contenedor adicional debajo del texto */}
        <div className="relative z-20 mt-10 text-black">
          <p>Contenido del contenedor debajo.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
