import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  // Abrir menú cuando el mouse entra
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Cerrar menú cuando el mouse sale
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <nav className>
      <ul className="flex space-x-4 list-none">
        <li><Link to="/" className="text-black hover:text-gray-600">Home</Link></li>

        {/* Servicios con menú desplegable */}
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: 'relative' }}
        >
          <span className="text-black hover:text-gray-600 cursor-pointer">Servicios</span>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMouseLeave}
            MenuListProps={{
              onMouseLeave: handleMouseLeave,
            }}
          >
            <MenuItem component={Link} to="/servicios/peluqueria">Peluquería</MenuItem>
            <MenuItem component={Link} to="/servicios/novias">Novias</MenuItem>
            <MenuItem component={Link} to="/servicios/unas">Uñas</MenuItem>
          </Menu>
        </li>

        <li><Link to="/contacto" className="text-black hover:text-gray-600">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
