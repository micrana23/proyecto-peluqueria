import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';

function Navbar({ isNovias }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuTimeout, setSubMenuTimeout] = useState(null); // Para controlar el timeout

  // Abrir menú hamburguesa
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  // Cerrar menú hamburguesa
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
    setSubMenuOpen(false);
    clearTimeout(subMenuTimeout); // Limpiar timeout si el menú principal se cierra
  };

  // Abrir submenú con retardo
  const handleSubMenuOpen = () => {
    const timeout = setTimeout(() => {
      setSubMenuOpen(true);
    }, 500); // Esperar 500 ms antes de abrir el submenú
    setSubMenuTimeout(timeout); // Guardar el timeout para poder cancelarlo
  };

  // Cerrar submenú y limpiar timeout
  const handleSubMenuClose = () => {
    clearTimeout(subMenuTimeout); // Cancelar el timeout si el ratón sale antes del tiempo
    setSubMenuOpen(false);
  };

  const textColorClass = isNovias ? 'text-white' : 'text-white'; // Siempre blanco en este caso

  return (
    <nav className="flex justify-between items-center p-4">
      {/* Título visible solo en pantallas pequeñas */}
      <div className="md:hidden text-white text-2xl font-bold">Xtylo Peluquería</div>

      {/* Menú de navegación para pantallas grandes */}
      <ul className="hidden md:flex space-x-8 list-none flex-grow justify-end">
        <li>
          <Link to="/" className={`${textColorClass} text-2xl font-bold hover:text-gray-400`}>
            Home
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={handleSubMenuOpen}
          onMouseLeave={handleSubMenuClose}
        >
          <span className={`${textColorClass} cursor-pointer text-2xl font-bold hover:text-gray-400`}>
            Servicios
          </span>
          <Menu
            anchorEl={anchorEl}
            open={subMenuOpen}
            onClose={handleSubMenuClose}
            MenuListProps={{
              onMouseLeave: handleSubMenuClose,
            }}
          >
            <MenuItem component={Link} to="/servicios/peluqueria" onClick={handleMenuClose} className="text-black">
              Peluquería
            </MenuItem>
            <MenuItem component={Link} to="/servicios/novias" onClick={handleMenuClose} className="text-black">
              Novias
            </MenuItem>
            <MenuItem component={Link} to="/servicios/unas" onClick={handleMenuClose} className="text-black">
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

      {/* Menú hamburguesa solo visible en pantallas pequeñas */}
      <div className="md:hidden">
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          onMouseLeave={handleMenuClose} // Cerrar al salir del menú
        >
          <MenuItem component={Link} to="/" onClick={handleMenuClose} className="text-black">
            Home
          </MenuItem>
          <MenuItem
            onMouseEnter={handleSubMenuOpen}
            onMouseLeave={handleSubMenuClose}
            className="text-black"
          >
            Servicios
            <Menu
              anchorEl={anchorEl}
              open={subMenuOpen}
              onClose={handleSubMenuClose}
              onMouseLeave={handleSubMenuClose}
            >
              <MenuItem component={Link} to="/servicios/peluqueria" onClick={handleMenuClose} className="text-black">
                Peluquería
              </MenuItem>
              <MenuItem component={Link} to="/servicios/novias" onClick={handleMenuClose} className="text-black">
                Novias
              </MenuItem>
              <MenuItem component={Link} to="/servicios/unas" onClick={handleMenuClose} className="text-black">
                Uñas
              </MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem component={Link} to="/contacto" onClick={handleMenuClose} className="text-black">
            Contacto
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isNovias: PropTypes.bool,
};

export default Navbar;
