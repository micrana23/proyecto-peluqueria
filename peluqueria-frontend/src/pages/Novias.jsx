import React, { useState } from "react";
import Layout from "../components/Layout";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Novias = () => {
  const images = [
    "../../public/assets/images/coleta.webp",
    "../../public/assets/images/peinando.webp",
    "../../public/assets/images/rubia.webp", // Añade aquí más imágenes
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Layout>
      <div className="relative">
        {/* Imagen de fondo */}
        <img
          src="/assets/images/novia3.webp"
          alt="Descripción de la imagen"
          className="w-full h-auto object-cover relative z-0"
        />

        {/* Texto superpuesto en la parte superior de la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-start z-10" style={{ top: '25%' }}> {/* Ajusta el valor de 'top' */}
          <h1 className="text-white text-4xl md:text-6xl font-bold shadow-lg font-playfair text-center">
            Servicio Integral de Novias
          </h1>
        </div>

        {/* Contenido por debajo del título */}
        <div className="relative z-20 flex flex-col items-center justify-center my-2"> {/* Reducir margen superior e inferior */}
          <h2 className="text-black text-4xl text-center font-dancing mb-2">
            <em>Te acompañamos en tu día más importante</em>
          </h2>
          <p className="text-black text-center font-playfair mb-2 text-lg max-w-lg">
            Queremos estar a tu lado en ese día especial y hacerte lucir tal y
            como habías imaginado sin tener que preocuparte de nada.
          </p>
          <p className="text-black text-center font-playfair mb-2 text-lg max-w-lg">
            Por eso ofrecemos nuestro Servicio Integral de Novias tanto en
            nuestros salones como en tu casa.
          </p>
          <p className="text-black text-center font-playfair mb-2 text-lg max-w-lg">
            Déjalo en nuestras manos y disfruta.
          </p>
        </div>

        {/* Nuevo contenedor para el carrusel de imágenes */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-center bg-yellow-100 py-10 my-12">
          {/* Carrusel de imágenes */}
          <div className="flex-1 flex items-center justify-center">
            <IconButton onClick={prevImage} aria-label="Previous">
              <ArrowBackIcon />
            </IconButton>
            <img
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              className="w-3/4 h-auto object-cover rounded-lg mx-4"
            />
            <IconButton onClick={nextImage} aria-label="Next">
              <ArrowForwardIcon />
            </IconButton>
          </div>

          {/* Nuevo contenedor a la derecha para "Pack de Novia" */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow-md max-w-md mx-4 mt-4 md:mt-0">
            <h2 className="text-black text-3xl font-playfair mb-4 text-center">
              Pack de Novia
            </h2>
            {/* Subtítulo "Pruebas" */}
            <h3 className="text-black text-2xl font-playfair mt-6 mb-2 text-start">
              Pruebas
            </h3>
            <ul className="list-disc list-inside text-black text-lg mb-4">
              <li>Asesoramiento personalizado</li>
              <li>Prueba de peinado y recogido</li>
              <li>
                Prueba de maquillaje
                <ul className="list-disc list-inside ml-4">
                  <li>Preparación facial</li>
                  <li>Maquillaje</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Novias;
