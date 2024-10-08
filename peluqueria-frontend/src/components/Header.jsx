import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Verificar si estás en la página de Novias
  const isNoviasPage = location.pathname === "../pages/Novias.jsx";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Cambiar el estado si la página se ha desplazado más de 50px
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Escuchar el evento de desplazamiento
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent", // Cambia según el desplazamiento
        color: isScrolled ? "#fff" : "#000", // Cambia el color del texto también si es necesario
        boxShadow: isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none", // Añadir una sombra cuando se desplaza
        transition: "background-color 0.3s ease", // Transición suave
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Toolbar className="flex justify-between items-center p-4 w-full">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          onClick={() => navigate("/")}
          sx={{ padding: 1 }}
        >
          <img src="/xtylo.png" alt="Peluqueria Xtylo" style={{ height: 50 }} />
        </IconButton>

        {/* Pasar la prop isNovias al Navbar */}
        <Navbar isNovias={isNoviasPage} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
