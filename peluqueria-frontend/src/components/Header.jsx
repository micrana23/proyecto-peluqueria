import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Verificar si estás en la página de Novias
  const isNoviasPage = location.pathname === "../pages/Novias.jsx";

  return (
    <AppBar
      position="fixed" 
      sx={{
        backgroundColor: "transparent", 
        boxShadow: "none", 
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
