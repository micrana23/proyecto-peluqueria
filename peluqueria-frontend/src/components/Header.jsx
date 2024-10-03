import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(243, 244, 246, 1)",
        boxShadow: "none",
        maxWidth: "100%",
      }}
    >
      <Toolbar className="flex justify-between items-center p-4 max-w-screen-lg mx-auto w-full">
        <IconButton
          edge="start"
          color="black"
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
