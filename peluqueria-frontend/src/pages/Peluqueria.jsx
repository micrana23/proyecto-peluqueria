import React from "react";
import Layout from "../components/Layout";

const Peluqueria = () => {
  return (
    <Layout>
      <div className="relative">
        {/* Imagen de fondo */}
        <img
          src="/assets/images/tijeras.jpg" // Cambia la ruta a tu imagen de fondo
          alt="Descripción de la imagen"
          className="w-full h-auto max-h-[600px] object-cover relative z-0"
        />

        {/* Texto superpuesto en la parte superior de la imagen */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-start z-10 lg:right-[13%] lg:top-[28%] sm:right-[7%] sm:top-[30%]"
          style={{ top: "28%", right: "13%" }}
        >
          <h1 className="custom-h1 mt-4 ">Peluquería Saludable</h1>
        </div>

        {/* Contenido por debajo del título */}
        <div className="relative z-20 flex flex-col items-center justify-center my-2">
          <h2 className="text-black text-4xl text-center font-dancing mb-2">
            <em>Tu bienestar es nuestra prioridad</em>
          </h2>
          <p className="text-black text-center font-playfair mb-2 text-lg max-w-lg">
            Ofrecemos una amplia gama de servicios de peluquería...
          </p>
          {/* Añade más párrafos según sea necesario */}
        </div>

        {/* Aquí puedes añadir más contenido específico sobre los servicios de peluquería */}
        <div className="relative z-20 flex flex-col items-center justify-center my-2">
          <h3 className="text-black text-3xl font-playfair mb-4 text-center">
            Nuestros Servicios
          </h3>
          <ul className="list-disc list-inside text-black text-lg mb-4">
            <li>Cortes de cabello personalizados</li>
            <li>Coloración de cabello</li>
            <li>Tratamientos capilares</li>
          </ul>
          <p className="text-black text-center font-playfair mb-2 text-lg max-w-lg">
            ¡Te esperamos para transformar tu look!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Peluqueria;
