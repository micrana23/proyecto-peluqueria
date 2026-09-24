import { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Header = ({ forcedBg }) => {
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
        backgroundColor: forcedBg
          ? forcedBg // Páginas sin foto de fondo (p. ej. Contacto): color fijo, sin cambios al hacer scroll
          : scrolled
            ? "rgba(51, 67, 74, 0.9)" // Carbón elegante al hacer scroll, transparente arriba
            : "transparent",
        backdropFilter: forcedBg
          ? "blur(10px)"
          : scrolled
            ? "blur(10px)"
            : "none",
        borderBottom:
          forcedBg || scrolled
            ? "1px solid rgba(216, 179, 106, 0.2)" // Línea dorada muy sutil para dar definición de marca
            : "1px solid transparent",
        transition: "background-color 0.4s ease, border-color 0.4s ease",
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
            src="/assets/images/logo portada.png"
            alt="Peluquería Xtylo"
            decoding="async"
            className="h-10 sm:h-14 md:h-20 rounded-full"
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

Header.propTypes = {
  forcedBg: PropTypes.string,
};

export default Header;
