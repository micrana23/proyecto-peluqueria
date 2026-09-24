import { useState } from "react";

import { Link } from "react-router-dom";

import Layout from "../components/Layout";

import { IconButton } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { bridalGalleryImages } from "../data/serviceContent";

const Novias = () => {
  const images = bridalGalleryImages;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Layout>
      <div className="relative">
        {/* Imagen principal */}

        <img
          src="/assets/images/novia3.webp"
          alt="Servicio de peluquería y belleza para novias"
          loading="eager"
          decoding="async"
          className="w-full h-auto lg:max-h-[600px] lg:object-cover lg:object-center relative z-0"
        />

        {/* Introducción */}

        <div className="relative z-20 flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 px-6">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-[#b9975b] text-center font-sans font-medium mb-4">
            Servicio Integral de Novias
          </p>

          <h1 className="custom-h1 text-3xl md:text-4xl lg:text-5xl text-[#4a4a4a] text-center mb-6">
            Te acompañamos en tu día más importante
          </h1>

          <div className="max-w-4xl lg:max-w-5xl text-center space-y-4">
            <p className="text-[#6b6b6b] font-sans text-sm md:text-base lg:text-lg leading-relaxed">
              Queremos estar a tu lado en ese día tan especial y hacerte lucir
              tal y como habías imaginado, sin tener que preocuparte de nada.
            </p>

            <p className="text-[#6b6b6b] font-sans text-sm md:text-base lg:text-lg leading-relaxed">
              Por eso ofrecemos nuestro Servicio Integral de Novias tanto en
              nuestros salones como en tu casa.
            </p>

            <p className="text-[#4a4a4a] font-playfair italic text-base md:text-lg lg:text-xl pt-2">
              Déjalo en nuestras manos y disfruta.
            </p>
          </div>
        </div>

        {/* Galería + Pack de Novia */}

        <div className="relative z-20 bg-[#f7f5f2] py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Galería */}

            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <IconButton
                onClick={prevImage}
                aria-label="Imagen anterior"
                sx={{
                  color: "#4a4a4a",
                  "&:hover": {
                    backgroundColor: "rgba(185,151,91,0.08)",
                  },
                }}
              >
                <ArrowBackIcon />
              </IconButton>

              <div className="flex-1 flex justify-center">
                <img
                  src={images[currentIndex]}
                  alt={`Peinado de novia ${currentIndex + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="
                    w-full
                    max-w-md
                    lg:max-w-lg
                    h-auto
                    object-cover
                    rounded-sm
                    shadow-md
                  "
                />
              </div>

              <IconButton
                onClick={nextImage}
                aria-label="Imagen siguiente"
                sx={{
                  color: "#4a4a4a",
                  "&:hover": {
                    backgroundColor: "rgba(185,151,91,0.08)",
                  },
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </div>

            {/* Pack de Novia */}

            <div
              className="
                w-full
                lg:w-1/2
                max-w-xl
                bg-white
                px-6
                py-8
                md:px-10
                md:py-10
                shadow-sm
                border
                border-[#e8e2da]
              "
            >
              <p className="uppercase tracking-[0.3em] text-xs text-[#b9975b] mb-3">
                Pack de novia
              </p>

              <h2 className="text-[#4a4a4a] text-3xl md:text-4xl font-playfair mb-8">
                Todo preparado para ti
              </h2>

              {/* Pruebas */}

              <div className="mb-8">
                <h3 className="text-[#4a4a4a] text-xl md:text-2xl font-playfair mb-3">
                  Pruebas
                </h3>

                <ul className="list-disc pl-5 text-[#6b6b6b] font-sans text-sm md:text-base leading-relaxed space-y-1">
                  <li>Asesoramiento personalizado</li>

                  <li>Prueba de peinado y recogido</li>

                  <li>Prueba de maquillaje</li>
                </ul>
              </div>

              {/* Días previos al evento */}

              <div className="mb-8">
                <h3 className="text-[#4a4a4a] text-xl md:text-2xl font-playfair mb-3">
                  Días previos al evento
                </h3>

                <ul className="list-disc pl-5 text-[#6b6b6b] font-sans text-sm md:text-base leading-relaxed space-y-1">
                  <li>Manicura / pedicura</li>

                  <li>Bioterapia facial (60 minutos)</li>

                  <li>Diseño de cejas</li>
                </ul>
              </div>

              {/* Día del evento */}

              <div>
                <h3 className="text-[#4a4a4a] text-xl md:text-2xl font-playfair mb-3">
                  Día del evento
                </h3>

                <ul className="list-disc pl-5 text-[#6b6b6b] font-sans text-sm md:text-base leading-relaxed space-y-1">
                  <li>Preparación facial</li>

                  <li>Maquillaje</li>

                  <li>Peinado y recogido</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Llamada a la acción final */}

        <div className="relative z-20 flex flex-col items-center justify-center py-16 md:py-20 px-4">
          <p className="text-[#6b6b6b] font-sans text-center mb-6 text-sm md:text-base max-w-xl leading-relaxed">
            ¿Lista para dar el paso? Cuéntanos tu fecha y lo preparamos todo
            contigo.
          </p>

          <Link
            to="/contacto"
            className="
              px-8
              py-3
              border
              border-[#4a4a4a]
              text-[#4a4a4a]
              uppercase
              tracking-[0.2em]
              text-sm
              font-sans
              transition-all
              duration-300
              hover:bg-[#4a4a4a]
              hover:text-white
            "
          >
            Solicitar cita
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Novias;
