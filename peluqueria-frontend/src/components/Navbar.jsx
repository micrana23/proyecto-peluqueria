import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

function Navbar({ isNovias }) { 
  const [anchorEl, setAnchorEl] = useState(null);

  // Abrir menú cuando el mouse entra
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Cerrar menú cuando el mouse sale
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const textColorClass = isNovias ? 'text-white' : 'text-white'; // Siempre blanco en este caso

  return (
    <nav className="flex">
      <ul className="flex space-x-8 list-none">
        <li>
          <Link to="/" className={`${textColorClass} text-2xl font-bold hover:text-gray-400`}>
            Home
          </Link>
        </li>

        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <span className={`${textColorClass} cursor-pointer text-2xl font-bold hover:text-gray-400`}>
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
            <MenuItem component={Link} to="/servicios/peluqueria" className="text-black">
              Peluquería
            </MenuItem>
            <MenuItem component={Link} to="/servicios/novias" className="text-black">
              Novias
            </MenuItem>
            <MenuItem component={Link} to="/servicios/unas" className="text-black">
              Uñas
            </MenuItem>
          </Menu>
        </li>

        <li>
          <Link to="/contacto" className={`${textColorClass} text-2xl font-bold hover:text-gray-400`}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  isNovias: PropTypes.bool, 
};

export default Navbar;
