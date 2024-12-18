import React from "react";
import Header from "./Header";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white-100">
      <Header />
      <main className="flex-grow">{children}</main>
      <footer className="relative p-4 md:p-8 bg-gradient-to-r from-[#f4c0b6] to-[#f0a9a0] text-white shadow-md">
        {/* Ajustamos las secciones para que se apilen en pantallas pequeñas */}
        <div className="flex flex-wrap items-start justify-between md:flex-nowrap space-y-4 md:space-y-0">
          {/* Sección de dirección (SALON) a la izquierda */}
          <div className="flex items-start w-full md:w-auto md:mr-8">
            <LocationOnIcon className="inline mr-2" />
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-shadow">
                SALON
              </h2>
              <a
                href="https://maps.app.goo.gl/WMCtPFEV67iSgMuj8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-white underline text-shadow"
              >
                Calle Añastro, 13 Madrid
              </a>
            </div>
          </div>

          {/* Sección de contacto (CONTACTO) */}
          <div className="flex items-start w-full md:w-auto md:mr-8">
            <PhoneIcon className="inline mr-2" />
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-shadow">
                CONTACTO
              </h2>
              <span className="text-sm md:text-base text-shadow">
                918987654 / 665769021
              </span>
            </div>
          </div>

          {/* Sección de horario (HORARIO) */}
          <div className="flex items-start w-full md:w-auto md:mr-8">
            <AccessTimeIcon className="inline mr-2" />
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-shadow">
                HORARIO
              </h2>
              <span className="text-sm md:text-base text-shadow">
                De lunes a Viernes 09:30h a 18:30h
              </span>
              <span className="text-sm md:text-base block text-shadow">
                Sábados 09:00h a 14:30h
              </span>
            </div>
          </div>

          {/* Sección de RRHH (Facebook y Email) */}
          <div className="flex flex-col items-start w-full md:w-auto">
            <div className="flex mb-1">
              <a href="mailto:micrana61@gmail.com" className="mr-2">
                <EmailIcon className="text-white" />
              </a>
            </div>
            <div>
              <span className="text-sm md:text-base text-shadow">
                micrana61@gmail.com
              </span>
              <Link
                to="/politica-privacidad"
                className="text-sm md:text-base block text-white underline mt-1 text-shadow"
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>

        {/* Sección de copyright centrada */}
        <div className="text-center mt-4 text-sm md:text-lg text-shadow">
          © 2024 Xtylo Peluquería
        </div>
      </footer>
    </div>
  );
};

export default Layout;
