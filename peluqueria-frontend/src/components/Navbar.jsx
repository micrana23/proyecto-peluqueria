import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PropTypes from "prop-types";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined";

function Navbar({ isNovias }) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [smallScreenSubMenuOpen, setSmallScreenSubMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSubMenuOpen(false);
    }, 300);
  };

  const linkClass =
    "text-white font-sans font-light text-sm uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#e3c9a0]";

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="md:hidden text-white font-playfair text-xl tracking-wide">
        Xtylo Peluquería
      </div>

      <ul className="hidden md:flex items-center space-x-10 list-none flex-grow justify-end">
        <li>
          <Link to="/" className={linkClass}>
            Home
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className={`${linkClass} cursor-pointer`}>Servicios</span>
          {subMenuOpen && (
            <ul className="absolute left-1/2 -translate-x-1/2 bg-[#33434a] border-t border-[#e3c9a0]/40 shadow-xl mt-4 rounded-sm z-10 w-48 py-2">
              <li className="flex items-center">
                <ContentCutIcon
                  sx={{ color: "#e3c9a0", fontSize: 20 }}
                  className="ml-4 mr-3"
                />
                <Link
                  to="/servicios/peluqueria"
                  className="block px-2 py-2.5 w-full text-white/90 font-sans font-light text-sm tracking-wide hover:text-[#e3c9a0] transition-colors duration-200"
                >
                  Peluquería
                </Link>
              </li>
              <li className="flex items-center">
                <FemaleOutlinedIcon
                  sx={{ color: "#e3c9a0", fontSize: 20 }}
                  className="ml-4 mr-3"
                />
                <Link
                  to="/servicios/novias"
                  className="block px-2 py-2.5 w-full text-white/90 font-sans font-light text-sm tracking-wide hover:text-[#e3c9a0] transition-colors duration-200"
                >
                  Novias
                </Link>
              </li>
              <li className="flex items-center">
                <BackHandOutlinedIcon
                  sx={{ color: "#e3c9a0", fontSize: 20 }}
                  className="ml-4 mr-3"
                />
                <Link
                  to="/servicios/unas"
                  className="block px-2 py-2.5 w-full text-white/90 font-sans font-light text-sm tracking-wide hover:text-[#e3c9a0] transition-colors duration-200"
                >
                  Uñas
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/contacto" className={linkClass}>
            Contacto
          </Link>
        </li>
      </ul>

      <div className="md:hidden">
        <IconButton
          edge="end"
          aria-label="menu"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
          sx={{ color: "#ffffff" }}
        >
          <MenuIcon />
        </IconButton>
        {subMenuOpen && (
          <div className="absolute right-4 bg-[#33434a] border-t border-[#e3c9a0]/40 shadow-xl rounded-sm">
            <ul className="z-10 w-48 py-2">
              <li>
                <Link
                  to="/"
                  className="block px-5 py-2.5 text-white/90 font-sans font-light text-sm tracking-wide hover:text-[#e3c9a0] transition-colors duration-200"
                  onClick={() => setSubMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <span
                  className="block px-5 py-2.5 text-white/90 font-sans font-light text-sm tracking-wide cursor-pointer hover:text-[#e3c9a0] transition-colors duration-200"
                  onClick={() =>
                    setSmallScreenSubMenuOpen(!smallScreenSubMenuOpen)
                  }
                >
                  Servicios
                </span>
                {smallScreenSubMenuOpen && (
                  <ul className="bg-[#3c4d54] mt-1">
                    <li className="flex items-center">
                      <ContentCutIcon
                        sx={{ color: "#e3c9a0", fontSize: 18 }}
                        className="ml-6 mr-2"
                      />
                      <Link
                        to="/servicios/peluqueria"
                        className="block px-2 py-2 w-full text-white/80 font-sans font-light text-sm hover:text-[#e3c9a0] transition-colors duration-200"
                        onClick={() => setSubMenuOpen(false)}
                      >
                        Peluquería
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FemaleOutlinedIcon
                        sx={{ color: "#e3c9a0", fontSize: 18 }}
                        className="ml-6 mr-2"
                      />
                      <Link
                        to="/servicios/novias"
                        className="block px-2 py-2 w-full text-white/80 font-sans font-light text-sm hover:text-[#e3c9a0] transition-colors duration-200"
                        onClick={() => setSubMenuOpen(false)}
                      >
                        Novias
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <BackHandOutlinedIcon
                        sx={{ color: "#e3c9a0", fontSize: 18 }}
                        className="ml-6 mr-2"
                      />
                      <Link
                        to="/servicios/unas"
                        className="block px-2 py-2 w-full text-white/80 font-sans font-light text-sm hover:text-[#e3c9a0] transition-colors duration-200"
                        onClick={() => setSubMenuOpen(false)}
                      >
                        Uñas
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="block px-5 py-2.5 text-white/90 font-sans font-light text-sm tracking-wide hover:text-[#e3c9a0] transition-colors duration-200"
                  onClick={() => setSubMenuOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isNovias: PropTypes.bool,
};

export default Navbar;
