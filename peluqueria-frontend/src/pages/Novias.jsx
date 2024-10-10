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
    "/assets/images/novia.webp",
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

        {/* Texto superpuesto */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-start z-10 novias-text"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold shadow-lg font-playfair text-center">
            Servicio Integral de Novias
          </h1>
        </div>

        {/* Contenido por debajo del título */}
        <div className="relative z-20 flex flex-col items-center justify-center my-6 lg:my-12 px-4">
          <h2 className="text-black text-2xl md:text-3xl text-center font-dancing mb-2">
            <em>Te acompañamos en tu día más importante</em>
          </h2>
          <p className="text-black text-center font-playfair mb-2 text-sm md:text-base lg:text-lg max-w-lg">
            Queremos estar a tu lado en ese día especial y hacerte lucir tal y
            como habías imaginado sin tener que preocuparte de nada.
          </p>
          <p className="text-black text-center font-playfair mb-2 text-sm md:text-base lg:text-lg max-w-lg">
            Por eso ofrecemos nuestro Servicio Integral de Novias tanto en
            nuestros salones como en tu casa.
          </p>
          <p className="text-black text-center font-playfair mb-2 text-sm md:text-base lg:text-lg max-w-lg">
            Déjalo en nuestras manos y disfruta.
          </p>
        </div>

        {/* Carrusel de imágenes */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-center bg-yellow-100 py-6 lg:py-10 my-8 lg:my-12">
          <div className="flex-1 flex items-center justify-center">
            <IconButton onClick={prevImage} aria-label="Previous">
              <ArrowBackIcon />
            </IconButton>
            <img
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              className="w-3/4 h-auto object-cover rounded-lg mx-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
            <IconButton onClick={nextImage} aria-label="Next">
              <ArrowForwardIcon />
            </IconButton>
          </div>
          {/* Pack de Novia */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow-md max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-4 mt-4 md:mt-0">
            <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-playfair mb-4 text-center">
              Pack de Novia
            </h2>
            <h3 className="text-black text-xl md:text-2xl lg:text-3xl font-playfair mt-6 mb-2 text-start">
              Pruebas
            </h3>
            <ul className="list-disc list-inside text-black text-sm md:text-base lg:text-lg mb-4">
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

            <h3 className="text-black text-xl md:text-2xl lg:text-3xl font-playfair mt-6 mb-2 text-start">
              Días previos al evento
            </h3>
            <ul className="list-disc list-inside text-black text-sm md:text-base lg:text-lg mb-4">
              <li>Manicura / pedicura</li>
              <li>Bioterapia facial (60 minutos)</li>
              <li>Diseño de cejas</li>
            </ul>

            <h3 className="text-black text-xl md:text-2xl lg:text-3xl font-playfair mt-6 mb-2 text-start">
              Día del evento
            </h3>
            <ul className="list-disc list-inside text-black text-sm md:text-base lg:text-lg mb-4">
              <li>Preparación facial</li>
              <li>Maquillaje</li>
              <li>Peinado y recogido</li>
            </ul>
          </div>
        </div>

        {/* Imágenes abstractas */}
        <Box className="relative z-30 flex justify-center items-center space-x-4 md:space-x-6 py-16 md:py-28 my-12 md:my-24 px-4">
          <Box
            component="img"
            src="/assets/images/flor.webp"
            alt="Imagen abstracta 1"
            className="w-24 h-auto md:w-32 lg:w-40 rounded-lg shadow-lg"
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
            className="w-28 h-auto md:w-36 lg:w-48 rounded-xl shadow-xl"
            sx={{
              position: "absolute",
              top: "20%",
              right: "8%",
              transform: "rotate(10deg)",
            }}
          />
          <Box
            component="img"
            src="/assets/images/jarron_rosa.webp"
            alt="Imagen abstracta 3"
            className="w-24 h-auto md:w-32 lg:w-36 rounded-lg shadow-lg"
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
            className="w-32 h-auto md:w-40 lg:w-44 rounded-lg shadow-lg"
            sx={{
              position: "absolute",
              bottom: "15%",
              right: "20%",
              transform: "rotate(-10deg)",
            }}
          />

          {/* Botón central */}
          <ButtonBase
            href="mailto:micrana61@gmail.com"
            sx={{
              position: "absolute",
              width: { xs: "150px", md: "250px" },
              height: { xs: "150px", md: "250px" },
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
              src="/assets/images/Forbici.jpg"
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
              left: "50%",
              top: {
                xs: "calc(75% + 50px)",
                sm: "calc(63% + 70px)",
                md: "calc(70% + 80px)",
              }, // Ajusta el valor de top según el tamaño de pantalla
              transform: "translateX(-50%)",
              textAlign: "center",
              color: "black",
              textDecoration: "none",
              fontSize: { xs: "12px", sm: "18px", md: "24px" },
            }}
          >
            <strong>Solicita tu cita</strong>
          </Typography>
        </Box>
      </div>
    </Layout>
  );
};

export default Novias;
