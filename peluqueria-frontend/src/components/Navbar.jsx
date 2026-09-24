import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { ServiceMenuItems } from "./ServiceMenu";

function Navbar() {
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

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const linkClass =
    "text-white font-sans font-light text-sm uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#e3c9a0]";

  return (
    <nav className="flex justify-between items-center p-4">
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
          <button
            type="button"
            className={`${linkClass} cursor-pointer`}
            onClick={() => setSubMenuOpen((open) => !open)}
          >
            Servicios
          </button>
          {subMenuOpen && (
            <ul className="absolute left-1/2 -translate-x-1/2 bg-[#33434a] border-t border-[#e3c9a0]/40 shadow-xl mt-4 rounded-sm z-10 w-48 py-2">
              <ServiceMenuItems onNavigate={() => setSubMenuOpen(false)} />
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
                <div className="flex items-center justify-between px-3 py-2">
                  <button
                    type="button"
                    className="block flex-1 px-2 py-2.5 text-left text-white/90 font-sans font-light text-sm tracking-wide cursor-pointer hover:text-[#e3c9a0] transition-colors duration-200"
                    onClick={() => setSmallScreenSubMenuOpen((open) => !open)}
                  >
                    Servicios
                  </button>
                  <button
                    type="button"
                    aria-label="Alternar servicios"
                    className="px-2 py-2.5 text-white/90 hover:text-[#e3c9a0] transition-colors duration-200"
                    onClick={() => setSmallScreenSubMenuOpen((open) => !open)}
                  >
                    {smallScreenSubMenuOpen ? "▴" : "▾"}
                  </button>
                </div>
                {smallScreenSubMenuOpen && (
                  <ul className="bg-[#3c4d54] mt-1">
                    <ServiceMenuItems
                      mobile
                      onNavigate={() => setSubMenuOpen(false)}
                    />
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

export default Navbar;
