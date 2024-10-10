import React from "react";
import Layout from "../components/Layout";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

const Peluqueria = () => {
  const services = [
    {
      title: "Cortes de cabello personalizados",
      image: "/assets/images/cortando pelo.webp",
    },
    {
      title: "Peinados",
      image: "/assets/images/rizando pelo.webp",
    },
    {
      title: "Coloración de cabello",
      image: "/assets/images/color cabello.webp",
    },
    {
      title: "Tratamientos capilares",
      image: "/assets/images/estanteria cosmeticos.webp",
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
          <h1 className="custom-h1 text-5xl sm:text-4xl lg:text-5xl mt-4">
            Peluquería Saludable
          </h1>
        </div>

        {/* Contenido por debajo del título */}
        <div className="relative z-20 flex flex-col items-center justify-center my-2">
          <h2 className="text-black text-4xl text-center font-dancing mb-2">
            <em>Tu bienestar es nuestra prioridad</em>
          </h2>
          <p className="text-black text-center font-playfair mb-2 text-lg max-w-lg">
            Ofrecemos una amplia gama de servicios de peluquería...
          </p>
        </div>

        {/* Servicios con Material UI */}
        <Grid container spacing={4} className="relative z-20 my-8 px-4">
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <Card>
                <CardMedia
                  component="img"
                  alt={service.title}
                  height="140"
                  image={service.image}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {service.title}
                  </Typography>
                </CardContent>
              </Card>
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
