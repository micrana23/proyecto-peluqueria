import React from "react";
import Layout from "../components/Layout";
import { Grid, Typography } from "@mui/material";

const Peluqueria = () => {
  const services = [
    {
      title: "Cortes de cabello personalizados",
      image: "/assets/images/cortando pelo.webp",
      description:
        "Incluye lavado dermocapilar, producto de styling y servicio de peinado.",
    },
    {
      title: "Peinados",
      image: "/assets/images/rizando pelo.webp",
      description: "Incluye lavado dermocapilar y producto de styling.",
    },
    {
      title: "Coloración de cabello",
      image: "/assets/images/color cabello.webp",
      description:
        "Conseguimos una coloración profesional sin dañar el cabello.",
    },
    {
      title: "Tratamientos capilares",
      image: "/assets/images/estanteria cosmeticos.webp",
      description:
        "Gran gama de tratamientos para mimar cada tipo de cabello tanto en el salón como para casa.",
    },
  ];

  return (
    <Layout>
      <div className="relative">
        {/* Imagen de fondo */}
        <img
          src="/assets/images/tijeras.jpg"
          alt="Descripción de la imagen"
          className="w-full h-auto max-h-[600px] object-cover relative z-0"
        />

        {/* Título (h1) fuera de la imagen */}
        <div className="relative z-20 flex flex-col items-center justify-center my-8">
          <h1 className="custom-h1 text-6xl sm:text-5xl lg:text-6xl mt-4">
            Peluquería Biosaludable
          </h1>
        </div>

        {/* Contenido por debajo del título */}
        <div className="relative z-20 flex flex-col items-center justify-center my-2">
          <h2 className="text-2xl sm:text-xl lg:text-3xl text-black text-center font-playfair mb-8 lg:max-w-4xl max-w-lg">
            Ofrecemos una amplia gama de servicios de peluquería
          </h2>
        </div>

        {/* Servicios con imágenes */}
        <Grid container spacing={4} className="relative z-20 my-8 px-4">
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <div
                style={{
                  border: "4px solid white", // Marco blanco
                  borderRadius: "8px", // Bordes redondeados
                  overflow: "hidden", // Para que el borde de la imagen sea redondeado
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%", // Imagen llena todo el contenedor
                    height: "237.033px", // Altura fija
                    objectFit: "cover", // Mantiene la proporción
                  }}
                />
              </div>

              {/* Título debajo de la imagen */}
              <Typography
                variant="h4"
                component="h4"
                align="left" // Alineación a la izquierda
                style={{
                  marginTop: "8px",
                  fontSize: "1.25rem", // Ajustar tamaño
                }}
              >
                {service.title}
              </Typography>

              {/* Descripción debajo del título */}
              <Typography
                variant="body1"
                component="p"
                align="left" // Alineación a la izquierda
                style={{
                  marginTop: "4px",
                  fontSize: "1rem",
                  color: "gray", // Estilo de texto más sutil
                }}
              >
                {service.description}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Contenido adicional (opcional) */}
        <div className="relative z-20 flex flex-col items-center justify-center my-2">
          <p className="text-black text-center font-playfair mb-2 text-lg max-w-lg">
            ¡Te esperamos para transformar tu look!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Peluqueria;
