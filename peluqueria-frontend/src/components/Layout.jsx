import React from 'react';
import Header from './Header';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">{children}</main>
      <footer className="relative p-8 bg-gray-800 text-white">
        <div className="flex items-center justify-between">
          {/* Sección de dirección (SALON) a la izquierda */}
          <div className="flex items-center">
            <LocationOnIcon className="inline mr-2" />
            <div>
              <h2 className="text-2xl font-bold mt-2">SALON</h2>
              <span className="text-base">Calle San Pito Pato, 69</span>
            </div>
          </div>

          {/* Sección de contacto (CONTACTO) */}
          <div className="flex items-center">
            <PhoneIcon className="inline mr-2" />
            <div>
              <h2 className="text-2xl font-bold mt-2">CONTACTO</h2>
              <span className="text-base">918987654 / 665769021</span>
            </div>
          </div>

          {/* Sección de horario (HORARIO) a la derecha */}
          <div className="flex items-center">
            <AccessTimeIcon className="inline mr-2" />
            <div>
              <h2 className="text-2xl font-bold mt-7">HORARIO</h2>
              <span className="text-base">De lunes a Viernes 09:30h a 18:30h</span>
              <span className="text-base block">Sábados 09:00h a 14:30h</span>
            </div>
          </div>

          {/* Sección de RRHH */}
          <div className="flex flex-col items-center">
            <div className="flex mb-1"> {/* Asegura que los iconos estén centrados */}
              <FacebookIcon className='mr-2 mt-7' />
              <EmailIcon className='mr-2 mt-7' />
            </div>
            <div>
              <span className='text-base'>info@Xtylo.es</span>
              <span className="text-base block">Política de Privacidad</span>
            </div>
          </div>
        </div>

        {/* Sección de copyright centrada */}
        <div className="text-center mt-4 text-lg">© 2024 Xtylo Peluquería</div>
      </footer>
    </div>
  );
};

export default Layout;
