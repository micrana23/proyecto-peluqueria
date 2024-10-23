import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import ContentCutIcon from "@mui/icons-material/ContentCut"; 
import PropTypes from "prop-types";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';

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

  const textColorClass = isNovias ? "text-white" : "text-white";

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="md:hidden text-white text-2xl font-bold">
        Xtylo Peluquería
      </div>

      <ul className="hidden md:flex space-x-8 list-none flex-grow justify-end">
        <li>
          <Link
            to="/"
            className={`${textColorClass} text-2xl font-bold hover:text-gray-400`}
          >
            Home
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span
            className={`${textColorClass} cursor-pointer text-2xl font-bold hover:text-gray-400`}
          >
            Servicios
          </span>
          {subMenuOpen && (
            <ul className="absolute left-0 bg-white shadow-md mt-2 rounded-lg z-10 w-40">
              <li className="flex items-center">
                <ContentCutIcon color="black" className="mr-2" />
                <Link
                  to="/servicios/peluqueria"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Peluquería
                </Link>
              </li>
              <li className="flex items-center">
                <FemaleOutlinedIcon color="black" className="mr-2" />
                <Link
                  to="/servicios/novias"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Novias
                </Link>
              </li>
              <li className="flex items-center">
                <BackHandOutlinedIcon color="black" className="mr-2" />
                <Link
                  to="/servicios/unas"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
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
            className={`${textColorClass} text-2xl font-bold hover:text-gray-400`}
          >
            Contacto
          </Link>
        </li>
      </ul>

      <div className="md:hidden">
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <MenuIcon />
        </IconButton>
        {subMenuOpen && (
          <div className="absolute right-0 bg-white shadow-md rounded-lg">
            <ul className="z-10 w-40">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => setSubMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <span
                  className="block px-4 py-2 text-black cursor-pointer hover:bg-gray-200"
                  onClick={() =>
                    setSmallScreenSubMenuOpen(!smallScreenSubMenuOpen)
                  }
                >
                  Servicios
                </span>
                {smallScreenSubMenuOpen && (
                  <ul className="bg-white shadow-md mt-2 rounded-lg">
                    <li className="flex items-center">
                      <ContentCutIcon className="mr-2" />
                      <Link
                        to="/servicios/peluqueria"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                        onClick={() => setSubMenuOpen(false)}
                      >
                        Peluquería
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <FemaleOutlinedIcon className="mr-2" />
                      <Link
                        to="/servicios/novias"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                        onClick={() => setSubMenuOpen(false)}
                      >
                        Novias
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <BackHandOutlinedIcon className="mr-2" />
                      <Link
                        to="/servicios/unas"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
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
                  className="block px-4 py-2 text-black hover:bg-gray-200"
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
