import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "green" }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="black"
          aria-label="home"
          onClick={() => navigate("/")} // Navega a la página de inicio
          sx={{ padding: 1 }}
        >
          <img
            src="/xtylo.png"
            alt="Peluqueria Xtylo" 
            style={{ height: 50 }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
