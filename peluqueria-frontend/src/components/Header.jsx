import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "green" }}
    >
      <Toolbar className="flex flex-col md:flex-row justify-between items-center p-4">
        <IconButton
          edge="start"
          color="black"
          aria-label="home"
          onClick={() => navigate("/")} // Navega a la página de inicio
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
