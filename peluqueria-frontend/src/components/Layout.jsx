import PropTypes from "prop-types";
import Header from "./Header";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Layout = ({ children, headerBg }) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white-100">
      <Header forcedBg={headerBg} />
      <main className="flex-grow">{children}</main>
      <footer className="relative p-6 md:p-10 bg-[#33434a] text-white/90 border-t border-[#e3c9a0]/30">
        {/* Ajustamos las secciones para que se apilen en pantallas pequeñas */}
        <div className="flex flex-wrap items-start justify-between md:flex-nowrap gap-y-8 max-w-6xl mx-auto">
          {/* Sección de dirección (SALON) a la izquierda */}
          <div className="flex items-start w-full md:w-auto md:mr-8">
            <LocationOnIcon
              sx={{ color: "#e3c9a0" }}
              className="inline mr-3 mt-1"
            />
            <div>
              <h2 className="font-playfair text-base md:text-lg tracking-[0.15em] uppercase text-[#e3c9a0] mb-1">
                Salón
              </h2>
              <a
                href="https://maps.app.goo.gl/WMCtPFEV67iSgMuj8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans font-light text-white/80 hover:text-[#e3c9a0] transition-colors duration-200"
              >
                Calle Añastro, 13 Madrid
              </a>
            </div>
          </div>

          {/* Sección de contacto (CONTACTO) */}
          <div className="flex items-start w-full md:w-auto md:mr-8">
            <PhoneIcon sx={{ color: "#e3c9a0" }} className="inline mr-3 mt-1" />
            <div>
              <h2 className="font-playfair text-base md:text-lg tracking-[0.15em] uppercase text-[#e3c9a0] mb-1">
                Contacto
              </h2>
              <span className="text-sm font-sans font-light text-white/80">
                918987654 / 665769021
              </span>
            </div>
          </div>

          {/* Sección de horario (HORARIO) */}
          <div className="flex items-start w-full md:w-auto md:mr-8">
            <AccessTimeIcon
              sx={{ color: "#e3c9a0" }}
              className="inline mr-3 mt-1"
            />
            <div>
              <h2 className="font-playfair text-base md:text-lg tracking-[0.15em] uppercase text-[#e3c9a0] mb-1">
                Horario
              </h2>
              <span className="text-sm font-sans font-light text-white/80 block">
                De lunes a Viernes 09:30h a 18:30h
              </span>
              <span className="text-sm font-sans font-light text-white/80 block">
                Sábados 09:00h a 14:30h
              </span>
            </div>
          </div>

          {/* Sección de RRHH (Facebook y Email) */}
          <div className="flex flex-col items-start w-full md:w-auto">
            <div className="flex items-center mb-2">
              <EmailIcon sx={{ color: "#e3c9a0" }} className="mr-2" />
              <a
                href="mailto:micrana61@gmail.com"
                className="text-sm font-sans font-light text-white/80 hover:text-[#e3c9a0] transition-colors duration-200"
              >
                micrana61@gmail.com
              </a>
            </div>
            <Link
              to="/politica-privacidad"
              className="text-sm font-sans font-light text-white/60 underline hover:text-[#e3c9a0] transition-colors duration-200"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>

        {/* Sección de copyright centrada */}
        <div className="text-center mt-10 pt-6 border-t border-white/10 text-xs font-sans font-light tracking-[0.2em] uppercase text-white/50">
          © 2024 Xtylo Peluquería
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerBg: PropTypes.string,
};

export default Layout;
