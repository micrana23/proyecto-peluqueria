import React from "react";
import Layout from "../components/Layout";
import { Box, Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      {/* Contenedor de fondo con la imagen */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/images/video peinando.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>

        {/* Frase justo debajo del logo */}
        <h1 className="custom-h1 text-white z-20 mt-2 md:mt-12 lg:mt-32 text-center">
          Bienvenido a Xtylo Peluquería
        </h1>
      </div>

      {/* Contenedor adicional con texto */}
      <Xtylotext />

      {/* Contenedor adicional debajo del texto */}
      <div className="relative z-20 mt-10 text-black">
        <p>Contenido del contenedor debajo.</p>
      </div>
      {/* Contenedor de imágenes encima del footer */}
      <section>
        {" "}
        <img
          src="/assets/images/fotoshome1.webp"
          alt="foto portada1"
          className="mb-4"
        />
        <img
          src="/assets/images/fotoshome2.webp"
          alt="foto portada2"
          className="mb-4"
        />
        <img
          src="/assets/images/fotoshome3.webp"
          alt="foto portada3"
          className="mb-4"
        />
        <img
          src="/assets/images/fotoshome4.webp"
          alt="foto portada4"
          className="mb-4"
        />
        <img
          src="/assets/images/fotoshome5.webp"
          alt="foto portada5"
          className="mb-4"
        />
      </section>
    </Layout>
  );
};

const Xtylotext = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: { xs: 4, sm: 6, md: 8 }, // Espaciado vertical para móvil, tablet y pantallas grandes
          textAlign: "center",
          backgroundColor: "#f4f4f9",
          borderRadius: 2,
          px: { xs: 2, sm: 4, md: 6 }, // Espaciado horizontal para móvil, tablet y pantallas grandes
        }}
      >
        <Typography
          variant="h3"
          className="text-black"
          sx={{
            fontFamily: "Playfair Display",
            mb: { xs: 2, sm: 3, md: 4 },
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.5rem" }, // Tamaño de fuente para móvil, tablet y pantallas grandes
          }}
        >
          La esencia de la belleza en Xtylo
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: { xs: 2, sm: 3, md: 4 },
            fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" }, // Tamaño de fuente para móvil, tablet y pantallas grandes
            color: "#555",
          }}
        >
          En Xtylo, la pureza es la base sobre la cual definimos la belleza.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: { xs: 2, sm: 3, md: 4 },
            fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" },
            color: "#555",
          }}
        >
          Nos destacamos como el equilibrio perfecto entre tu bienestar y lo que
          te hace único: tu forma de percibir el mundo.
        </Typography>

        {/* Utilizamos Box en lugar de Grid */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="center"
          gap={4}
        >
          <Box flex={1}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" }, // Tamaño de fuente para móvil, tablet y pantallas grandes
                color: "#555",
              }}
            >
              Apuesta por un estilo de vida basado en la belleza orgánica, con
              productos de última generación que actúan a nivel celular,
              respaldados científicamente y comprometidos con tu salud y el
              medio ambiente.
            </Typography>
          </Box>
          <Box flex={1}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" },
                color: "#555",
              }}
            >
              Deja que tu piel y tu cabello reciban el cuidado experto de un
              equipo especializado en una belleza consciente y sostenible.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
