import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Layout from "../components/Layout";
import { nailContent } from "../data/serviceContent";

const Unas = () => {
  return (
    <Layout>
      <div className="relative">
        <img
          src="/assets/images/Servicio-estetica.webp"
          alt="Servicios de estética Xtylo"
          loading="eager"
          decoding="async"
          className="w-full h-auto max-h-[550px] object-cover relative z-0"
        />

        <div className="relative z-20 flex flex-col items-center justify-center my-8">
          <h1 className="custom-h1 text-4xl sm:text-5xl lg:text-6xl mt-4">
            Tratamiento pedicura y manicura
          </h1>
        </div>

        <div className="relative z-20 my-8 px-4 md:px-8">
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="custom-h2">Servicios de Estética</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {nailContent.map((item, index) =>
              item.type === "image" ? (
                <div
                  key={index}
                  className="border border-[#e8e2da] bg-white p-2 shadow-sm"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover"
                    style={
                      item.focus ? { objectPosition: item.focus } : undefined
                    }
                  />
                </div>
              ) : (
                <div
                  key={index}
                  className="border border-[#e8e2da] bg-white p-6 flex items-center"
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      color: "#6b6b6b",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.content}
                  </Typography>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center py-16 md:py-20 px-4">
          <p className="text-[#6b6b6b] font-sans text-center mb-6 text-sm md:text-base max-w-xl leading-relaxed">
            ¿Lista para lucir tus manos y pies perfectos? Reserva tu cita con
            nuestro equipo de estética.
          </p>
          <Link
            to="/contacto"
            className="px-8 py-3 border border-[#4a4a4a] text-[#4a4a4a] uppercase tracking-[0.2em] text-sm font-sans transition-all duration-300 hover:bg-[#4a4a4a] hover:text-white"
          >
            Solicitar cita
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Unas;
