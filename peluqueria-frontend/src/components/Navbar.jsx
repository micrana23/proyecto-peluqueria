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
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none' }}>
        <li><Link to="/">Home</Link></li>

        {/* Servicios con menú desplegable */}
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: 'relative' }}
        >
          <span>Servicios</span>

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

        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
