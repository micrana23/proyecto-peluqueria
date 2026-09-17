import React from "react";
import Layout from "../components/Layout";
import { Box, Typography, Container } from "@mui/material";
import CookieConsent from "../components/CookieConsent";
import { Link } from "react-router-dom";

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

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.45))",
          }}
        ></div>

        {/* Bloque de contenido */}
        <div
          className="
              relative
              z-20
              flex
              flex-col
              items-center
              text-center
          "
        >
          {/* Categorías */}
          <p
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              md:text-sm
              text-[#e3c9a0]
              font-light
              mb-4
              [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]
            "
          >
            Peluquería · Estética · Novias
          </p>

          {/* Título */}
          <h1
            className="
              custom-h1
              text-white
              text-center
              font-light
              tracking-wide
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              max-w-4xl
              leading-tight
              px-6
              [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]
            "
          >
            Peluquería Biosaludable en Madrid
          </h1>

          {/* Subtítulo */}
          <p
            className="
              text-white/90
              text-lg
              md:text-xl
              mt-6
              tracking-wide
              [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]
              text-center
              max-w-3xl
              px-6
              font-sans
              font-light
            "
          >
            Especialistas en coloración natural, tratamientos capilares y
            belleza respetuosa para cuidar tu cabello como se merece.
          </p>

          {/* Botón */}
          <Link
            to="/contacto"
            className="
              mt-10
              px-8
              py-3
              border
              border-white
              text-white
              uppercase
              tracking-[0.2em]
              text-sm
              font-sans
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            Reservar cita
          </Link>
        </div>
      </div>

      {/* Contenedor adicional con texto */}
      <Xtylotext />

      {/* Contenedor adicional debajo del texto */}
      <div className="relative z-20 mt-10 text-[#4a4a4a] flex flex-col items-center justify-center h-450 mb-5">
        <p className="text-center text-sm md:text-base font-sans font-medium tracking-[0.3em] uppercase">
          Nuestro salón
        </p>
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
      <CookieConsent />
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
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 400,
            color: "#4a4a4a",
            mb: { xs: 2, sm: 3, md: 3 },
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.25rem" },
          }}
        >
          La esencia de la belleza en Xtylo
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: '"Inter", sans-serif',
            mb: { xs: 3, sm: 4, md: 5 },
            fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
            color: "#6b6b6b",
            fontStyle: "italic",
          }}
        >
          En Xtylo, la pureza es la base sobre la cual definimos la belleza.
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
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                lineHeight: 1.75,
                color: "#6b6b6b",
              }}
            >
              Apuesta por un estilo de vida basado en la belleza orgánica:
              productos de última generación que actúan a nivel celular,
              respaldados científicamente y comprometidos con tu salud y el
              medio ambiente. Deja que tu piel y tu cabello reciban el cuidado
              experto de un equipo especializado en una belleza consciente y
              sostenible.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
