import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import PropTypes from 'prop-types'; // Importar PropTypes


function Navbar({ isNovias }) { // Recibir la prop isNovias
  const [anchorEl, setAnchorEl] = useState(null);

  // Abrir menú cuando el mouse entra
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Cerrar menú cuando el mouse sale
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  // Definir clase de texto según la prop isNovias
  const textColorClass = isNovias ? 'text-white' : 'text-black';

  return (
    <nav className="flex">
      <ul className="flex space-x-4 list-none">
        <li>
          <Link to="/" className={`${textColorClass} hover:text-gray-600`}>
            Home
          </Link>
        </li>

        {/* Servicios con menú desplegable */}
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <span className={`${textColorClass} hover:text-gray-600 cursor-pointer`}>
            Servicios
          </span>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMouseLeave}
            MenuListProps={{
              onMouseLeave: handleMouseLeave,
            }}
          >
            <MenuItem component={Link} to="/servicios/peluqueria">
              Peluquería
            </MenuItem>
            <MenuItem component={Link} to="/servicios/novias">
              Novias
            </MenuItem>
            <MenuItem component={Link} to="/servicios/unas">
              Uñas
            </MenuItem>
          </Menu>
        </li>

        <li>
          <Link to="/contacto" className={`${textColorClass} hover:text-gray-600`}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
