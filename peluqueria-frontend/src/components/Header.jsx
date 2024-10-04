import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="absolute" // Mantener la posición como absoluta
      sx={{
        backgroundColor: "transparent", // Sin fondo
        boxShadow: "none", // Sin sombra
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Toolbar className="flex justify-between items-center p-4 w-full">
        <IconButton
          edge="start"
          color="inherit" // Cambiar el color a 'inherit' para heredar el color del texto de la imagen
          aria-label="home"
          onClick={() => navigate("/")}
          sx={{ padding: 1 }}
        >
          <img src="/xtylo.png" alt="Peluqueria Xtylo" style={{ height: 50 }} />
        </IconButton>
        <Navbar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
