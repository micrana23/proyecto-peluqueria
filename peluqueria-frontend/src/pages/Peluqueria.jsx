import React from "react";
import Layout from "../components/Layout";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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

  const images = [
    "/assets/images/rubia2.jpg",
    "/assets/images/reflejos.jpg",
    "/assets/images/pelirroja.jpg",
    "/assets/images/mechas.jpg",
    "/assets/images/modelomechas.jpg",
    "/assets/images/castañarizado.jpg",
  ];

  // Consulta para pantallas móviles
  const isMobile = useMediaQuery("(max-width: 599px)");

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
          <h1 className="custom-h1 text-6xl sm:text-5xl lg:text-5xl mt-16">
            Peluquería Biosaludable
          </h1>
        </div>
        {/* Contenido por debajo del título */}
        <div className="relative z-20 flex flex-col items-center justify-center my-2">
          <h2 className="custom-h2">Servicios de peluquería</h2>
        </div>
        {/* Servicios con imágenes */}
        <Grid
          container
          spacing={4}
          className="relative z-20 my-8 px-4"
          style={{ marginBottom: "130px" }}
        >
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
                  fontSize: "1.20rem",
                  fontWeight: "bold",
                  color: "#523253",
                }}
              >
                {service.title}
              </Typography>

              {/* Descripción debajo del título */}
              <Typography
                variant="body1"
                component="p"
                className="peluqueria-text"
                sx={{
                  textAlign: "justify",
                  lineHeight: 1.7,
                  marginBottom: "24px", // Mantiene una separación adecuada para pantallas móviles
                  "@media (min-width: 600px)": {
                    marginBottom: "12px", // Reduce la separación para pantallas medianas y grandes
                  },
                }}
              >
                {service.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
        {/* Nuevo h2 con fondo y contenedor */}
        <div
          className="bg-cover bg-center py-8"
          style={{
            backgroundImage: `url('/assets/images/pintura_blanca.webp')`,
          }}
        >
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
                className="section peluqueria-text"
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
                una capa protectora en el pelo.
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
        {/* Nuevo contenedor con el h2 y carrusel */}
        <div className="bg-white py-8">
          {/* H2 centrado */}
          <div className="relative z-20 flex flex-col items-center justify-center my-8">
            <h2 className="custom-h2">Trabajos en coloración</h2>
          </div>

          {/* Carrusel para pantallas medianas y grandes */}
          {!isMobile && (
            <div className="relative z-20 flex justify-center items-center max-w-6xl mx-auto">
              <Carousel
                showArrows
                infiniteLoop
                showThumbs={false} // Oculta las miniaturas
                showStatus={false} // Oculta el estado
                centerMode
                centerSlidePercentage={33.33} // Muestra 3 fotos al inicio
                dynamicHeight={false}
                emulateTouch
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "0 5px", // Espacio entre las imagenes
                    }}
                  >
                    <img
                      src={image}
                      alt={`Trabajo en coloración ${index + 1}`}
                      style={{
                        height: "460px", // Mantiene la altura de 460px
                        objectFit: "cover",
                        display: "block",
                        margin: "0 5px", // Centra la imagen en el slide
                        width: "100%", // Asegura que la imagen ocupe el 100% del slide
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          )}

          {/* Imágenes apiladas para pantallas móviles */}
          {isMobile && (
            <div className="grid grid-cols-1 gap-4 max-w-6xl mx-auto">
              {images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={image}
                    alt={`Trabajo en coloración ${index + 1}`}
                    style={{
                      width: "50%",
                      height: "320px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-14" />
        {/*Este div añade mas margen debajo del carrousel*/}
      </div>
    </Layout>
  );
};

export default Peluqueria;
