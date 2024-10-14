import React from "react";
import { Box, Typography, Paper, ButtonBase } from "@mui/material";
import Layout from "../components/Layout";

const Unas = () => {
  return (
    <Layout>
      <Box className="relative">
        {/* Imagen de fondo */}
        <img
          src="/assets/images/Servicio-estetica.jpg"
          alt="Descripción de la imagen"
          className="w-full h-auto max-h-[600px] object-cover relative z-0"
        />

        {/* Texto superpuesto */}
        {/* <Box
          className="absolute inset-0 flex flex-col items-center justify-start uñas-text"
          sx={{
            top: { xs: "43%", sm: "55%", md: "50%", lg:"55%", xl:"57%"},
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <Typography
            variant="h1"
            className="text-white font-bold shadow-lg font-playfair text-center"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "3rem", lg: "3rem" },
            }}
          >
            Tratamiento pedicura y manicura
          </Typography>
        </Box> */}

                {/* Título (h1) fuera de la imagen */}
                <div className="relative z-20 flex flex-col items-center justify-center my-8">
          <h1 className="custom-h1 text-5xl sm:text-4xl lg:text-5xl mt-4">
            Tratamiento pedicura y manicura
          </h1>
        </div>

        {/* Contenedor para Servicios de Estética */}
        <Box mt={8} px={{ xs: 1, md: 2 }}>
          <Typography
            variant="h2"
            className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-center"
            sx={{fontSize:{ xs:"1.5rem", sm: "2rem", md:"3rem", lg:"3rem"}}}
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
              <Box flex={1} mr={1}>
                <Paper elevation={2} sx={{ padding: 2 }}>
                  <Typography variant="body1" className="text-gray-700">
                    Disfruta de nuestros tratamientos exclusivos para cuidar tus
                    uñas y piel con productos de alta calidad.
                  </Typography>
                </Paper>
              </Box>
              <Box flex={1} mx={1}>
                <Paper
                  elevation={2}
                  sx={{ padding: 2, display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="/assets/images/uñas pies.webp"
                    alt="Foto tratamiento"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "400px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </Paper>
              </Box>
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
              <Box flex={1} mr={1}>
                <Paper
                  elevation={2}
                  sx={{ padding: 2, display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="/assets/images/aplicando pelo.webp"
                    alt="Foto estética"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "300px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </Paper>
              </Box>
              <Box flex={1} mx={1}>
                <Paper elevation={2} sx={{ padding: 2 }}>
                  <Typography variant="body1" className="text-gray-700">
                    Nuestros especialistas te atenderán con atención
                    personalizada para garantizar una experiencia relajante.
                  </Typography>
                </Paper>
              </Box>
              <Box flex={1} ml={1}>
                <Paper
                  elevation={2}
                  sx={{ padding: 2, display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="/assets/images/mojando pelo.webp"
                    alt="Foto relajante"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "300px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </Paper>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Contenedor de Imágenes Abstractas con Fondo Distinto */}
        <Box
          className="relative z-30 flex justify-center items-center space-x-4 md:space-x-6 py-16 md:py-28 pt-30 my-16 md:my-24 px-4"
          sx={{
            backgroundColor: "#90EE90",// Fondo de color claro
            display: 'flex',
            flexDirection: 'row', // Asegúrate de que las imágenes se distribuyan en fila
            justifyContent: 'center', // Centrar horizontalmente
            alignItems: 'center', // Alineación vertical
            minHeight: { xs: '200px', md: 'auto' }, // Ajusta la altura mínima para móviles
            }}
        >
          <Box
            component="img"
            src="/assets/images/flor.webp"
            alt="Imagen abstracta 1"
            className="w-24 h-auto md:w-32 lg:w-40 rounded-lg shadow-lg"
            sx={{
              position: "absolute",
              top: "20%",
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
              top: "30%",
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
              top: "10%",
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
              width: { xs: "200px", md: "300px" },
              height: { xs: "200px", md: "300px" },
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              top: {
                xs: "calc(25% + 50px)",
                sm: "calc(40% + 70px)",
                md: "calc(15% + 80px)",
              },
            }}
          >
            <Box
              component="img"
              src="/assets/images/chica-cogiendo-cita.jpg"
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
                md: "calc(89% + 80px)",
              },
              transform: "translateX(-50%)",
              textAlign: "center",
              color: "black",
              textDecoration: "none",
              fontSize: { xs: "22px", sm: "18px", md: "24px" },
            }}
          >
            <strong>Solicita tu cita</strong>
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Unas;
