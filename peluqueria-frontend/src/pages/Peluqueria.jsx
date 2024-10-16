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
      title: "Coloración saludable",
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
          className="w-full h-auto sm:h-[550px] h-[550px] object-cover relative z-0"
        />

        {/* Título (h1) fuera de la imagen */}
        <div className="relative z-20 flex flex-col items-center justify-center my-8">
          <h1 className="custom-h1 text-6xl sm:text-5xl lg:text-6xl mt-4">
            Peluquería Biosaludable
          </h1>
        </div>

        {/* Contenido por debajo del título */}
        <div className="relative z-20 flex flex-col items-center justify-center my-2">
          <h2 className="custom-h2">Servicios de peluquería</h2>
        </div>

        {/* Servicios con imágenes */}
        <Grid container spacing={4} className="relative z-20 my-8 px-4">
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <div
                style={{
                  border: "10px solid white",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "237.033px",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Título debajo de la imagen */}
              <Typography
                variant="h4"
                component="h4"
                align="left"
                style={{
                  marginTop: "8px",
                  fontSize: "1.25rem",
                }}
              >
                {service.title}
              </Typography>

              {/* Descripción debajo del título */}
              <Typography
                variant="body1"
                component="p"
                align="left"
                className="peluqueria-text"
              >
                {service.description}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Nuevo h2 con fondo y contenedor */}
        <div className="bg-gray-100 py-8">
          <div className="relative z-20 flex flex-col items-center justify-center my-8">
            <h2 className="custom-h2">Nuestra cultura del color</h2>
          </div>

          {/* Texto y Foto en columnas */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-4 max-w-6xl mx-auto">
            {/* Columna de texto */}
            <div
              className="lg:w-1/2 w-full p-4"
              style={{
                maxWidth: "510.3px",
                height: "637.017px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body1"
                component="p"
                className="peluqueria-text"
              >
                Apostamos por una nueva cultura del color, 100% natural y
                respetuosa con las personas y con el medioambiente.
              </Typography>

              <Typography
                variant="body1"
                component="p"
                className="peluqueria-text"
              >
                En nuestro salón trabajamos con los Barros y óleos NEO de
                Secretos del Agua. Hechos a base de productos naturales que no
                contienen amoniacos, que no dañan el cabello y, además, crean
                una capa protectora en el pelo. Una mezcla idónea de minerales y
                extractos de algunas plantas como el Índigo, la Camelia o la
                Linaza.
              </Typography>

              <Typography
                variant="body1"
                component="p"
                className="peluqueria-text"
              >
                Esta vez no se trata de pigmentos escogidos al azar, sino que
                están especialmente seleccionados por su afinidad con la
                queratina del cabello con el objetivo de realizar coloraciones
                absolutamente personalizadas para cada cabello, y para cualquier
                gama de color, ya sea en rubios, castaños o cobrizos.
              </Typography>

              <Typography
                variant="body1"
                component="p"
                className="peluqueria-text"
              >
                De esta manera se consiguen colores únicos, teniendo en cuenta
                el color y estructura natural de su cabello, incluso cuando lo
                que necesita es aportar fuerza y brillo.
              </Typography>
            </div>

            {/* Columna de imagen */}
            <div
              className="lg:w-1/2 w-full p-4"
              style={{ maxWidth: "510.3px", height: "637.017px" }}
            >
              <img
                src="/assets/images/productos pelu.webp"
                alt="Productos para el cabello"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Contenido adicional */}
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
