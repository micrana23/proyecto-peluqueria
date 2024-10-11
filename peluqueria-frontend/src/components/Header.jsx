import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Manejar el scroll para cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // Cambia el color después de hacer scroll más de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.7)" : "transparent", // Cambia a oscuro al hacer scroll
        transition: "background-color 0.3s ease", // Transición suave
        boxShadow: "none", // Quitar sombras
        width: "100%", // Asegurar que el header ocupe todo el ancho
      }}
    >
      <Toolbar
        className="flex justify-between items-center p-4"
        sx={{
          flexDirection: "row", // Mantener el logo y menú en fila
          justifyContent: "space-between", // Asegurar que el logo y el menú estén en extremos opuestos
          width: "100%", // El Toolbar ocupará todo el ancho disponible
          padding: { xs: "8px 16px", sm: "12px 24px" }, // Ajustes de padding según el tamaño de la pantalla
        }}
      >
        {/* Logo a la izquierda */}
        <IconButton
          edge="start"
          aria-label="home"
          onClick={() => navigate("/")}
          sx={{
            padding: 0,
            mb: 0, // Quitar cualquier margen inferior en todas las pantallas
            display: "flex",
            justifyContent: "flex-start", // Mantener el logo alineado a la izquierda
          }}
        >
          <img
            src="/xtylo.png"
            alt="Peluquería Xtylo"
            style={{ height: 50 }}
          />
        </IconButton>

        {/* Navbar a la derecha */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end", // Mantener el menú alineado a la derecha
            flexGrow: 1, // Para que el menú y el logo estén en extremos opuestos
          }}
        >
          <Navbar />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
