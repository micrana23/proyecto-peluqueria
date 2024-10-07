import React, { useState } from "react";
import Layout from "../components/Layout";
import { IconButton, Box, ButtonBase, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Novias = () => {
  const images = [
    "/assets/images/coleta.webp",
    "/assets/images/peinando.webp",
    "/assets/images/rubia.webp", // Añade aquí más imágenes
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
        <div
          className="absolute inset-0 flex flex-col items-center justify-start z-10"
          style={{ top: "25%" }}
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold shadow-lg font-playfair text-center">
            Servicio Integral de Novias
          </h1>
        </div>

        {/* Contenido por debajo del título */}
        <div className="relative z-20 flex flex-col items-center justify-center my-2">
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

          {/* Contenedor para el "Pack de Novia" */}
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

        {/* Contenedor para las imágenes superpuestas de forma abstracta */}
        <Box className="relative z-30 flex justify-center items-center space-x-6 py-20 my-16">
          <Box
            component="img"
            src="/assets/images/flor.webp"
            alt="Imagen abstracta 1"
            className="w-40 h-auto rounded-lg shadow-lg"
            sx={{
              position: "absolute",
              top: "10%",
              left: "10%",
              transform: "rotate(-15deg)",
            }}
          />
          <Box
            component="img"
            src="/assets/images/flores.webp"
            alt="Imagen abstracta 2"
            className="w-48 h-auto rounded-lg shadow-lg"
            sx={{
              position: "absolute",
              top: "20%",
              right: "15%",
              transform: "rotate(10deg)",
            }}
          />
          <Box
            component="img"
            src="/assets/images/jarron_rosa.webp"
            alt="Imagen abstracta 3"
            className="w-36 h-auto rounded-lg shadow-lg"
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "20%",
              transform: "rotate(5deg)",
            }}
          />
          <Box
            component="img"
            src="/assets/images/magic_please.webp"
            alt="Imagen abstracta 4"
            className="w-44 h-auto rounded-lg shadow-lg"
            sx={{
              position: "absolute",
              bottom: "15%",
              right: "20%",
              transform: "rotate(-10deg)",
            }}
          />

          {/* Botón en el centro con imagen de fondo y enlace para enviar un email */}
          <ButtonBase
            href="mailto:micrana61@gmail.com"
            sx={{
              position: "absolute",
              width: "150px",
              height: "150px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Box
              component="img"
              src="/assets/images/Forbici.jpg" // Imagen para el botón
              alt="Solicita tu cita"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ButtonBase>

          {/* Texto debajo del botón */}
          <Typography
            variant="h6"
            component="a"
            href="mailto:micrana61@gmail.com"
            sx={{
              position: "absolute",
              top: "calc(50% + 80px)",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              color: "black",
              textDecoration: "none",
            }}
          >
            Solicita tu cita
          </Typography>
        </Box>
      </div>
    </Layout>
  );
};

export default Novias;
