import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Layout from "../components/Layout";

const Unas = () => {
  return (
    <Layout>
      <Box className="relative">
        {/* Imagen de fondo */}
        <img
          src="/assets/images/magic_please.webp"
          alt="Descripción de la imagen"
          style={{
            width: "100%",
            height: "auto",
            position: "relative",
            zIndex: 0,
          }}
        />

        {/* Texto superpuesto */}
        <Box
          className="absolute inset-0 flex flex-col items-center justify-start uñas-text"
          style={{ top: "65%", transform: "translateY(-50%)", zIndex: 10 }}
        >
          <Typography
            variant="h1"
            className="text-white font-bold shadow-lg font-playfair text-center"
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '5rem', lg: '6rem' }, // Cambiar el tamaño de fuente responsivamente
            }}
          >
            Tratamiento pedicura y manicura
          </Typography>
        </Box>

        {/* Contenedor para Servicios de Estética */}
        <Box mt={8} px={{ xs: 1, md: 2 }}>
          <Typography
            variant="h2"
            className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-center"
          >
            Servicios de Estética
          </Typography>
          <Box
            sx={{
              width: "150px",
              height: "4px",
              backgroundColor: "gray",
              margin: "16px auto",
            }}
          ></Box>

          {/* Contenedor grande usando Box */}
          <Box display="flex" flexDirection="column" gap={2}>
            {/* Fila de arriba */}
            <Box display="flex" justifyContent="space-between">
              {/* Arriba izquierda (Párrafo) */}
              <Box flex={1} mr={1}>
                <Paper elevation={2} sx={{ padding: 2 }}>
                  <Typography variant="body1" className="text-gray-700">
                    Disfruta de nuestros tratamientos exclusivos para cuidar tus
                    uñas y piel con productos de alta calidad.
                  </Typography>
                </Paper>
              </Box>

              {/* Arriba centro (Foto) */}
              <Box flex={1} mx={1}>
                <Paper elevation={2} sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
                  <img
                    src="/assets/images/uñas pies.webp"
                    alt="Foto tratamiento"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "400px", // Ajusta esto según tus necesidades
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </Paper>
              </Box>

              {/* Arriba derecha (Párrafo) */}
              <Box flex={1} ml={1}>
                <Paper elevation={2} sx={{ padding: 2 }}>
                  <Typography variant="body1" className="text-gray-700">
                    Ofrecemos servicios de manicura, pedicura y tratamientos
                    especiales para que siempre te veas radiante.
                  </Typography>
                </Paper>
              </Box>
            </Box>

            {/* Fila de abajo */}
            <Box display="flex" justifyContent="space-between">
              {/* Abajo izquierda (Foto) */}
              <Box flex={1} mr={1}>
                <Paper elevation={2} sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
                  <img
                    src="/assets/images/aplicando pelo.webp"
                    alt="Foto estética"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "300px", // Ajusta esto según tus necesidades
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </Paper>
              </Box>

              {/* Abajo centro (Párrafo) */}
              <Box flex={1} mx={1}>
                <Paper elevation={2} sx={{ padding: 2 }}>
                  <Typography variant="body1" className="text-gray-700">
                    Nuestros especialistas te atenderán con atención personalizada
                    para garantizar una experiencia relajante.
                  </Typography>
                </Paper>
              </Box>

              {/* Abajo derecha (Foto) */}
              <Box flex={1} ml={1}>
                <Paper elevation={2} sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
                  <img
                    src="/assets/images/mojando pelo.webp"
                    alt="Foto relajante"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "300px", // Ajusta esto según tus necesidades
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </Paper>
              </Box>
            </Box>
          </Box>
        </Box>

        <h1>Uñas</h1>
        <p>Servicios de uñas...</p>
      </Box>
    </Layout>
  );
};

export default Unas;
