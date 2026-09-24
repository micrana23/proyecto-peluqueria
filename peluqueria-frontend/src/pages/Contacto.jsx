import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Phone, LocationOn, AccessTime } from "@mui/icons-material"; // Importamos los iconos desde Material UI
import { Snackbar, Alert } from "@mui/material";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptPolicy: false,
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Este campo es requerido";
    if (!formData.email) {
      formErrors.email = "Este campo es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Formato de email no válido";
    }
    if (!formData.phone) {
      formErrors.phone = "Este campo es requerido";
    } else if (!/^\d{9}$/.test(formData.phone)) {
      formErrors.phone = "Formato de teléfono no válido";
    }
    if (!formData.message) formErrors.message = "Este campo es requerido";
    if (!formData.acceptPolicy)
      formErrors.acceptPolicy = "Debe aceptar la política de privacidad";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Bloquea envíos duplicados mientras la API procesa el correo.
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // En producción la URL se configura sin cambiar el código de la página.
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        setOpenSnackbar(true);
        //Restablece el formulario
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          acceptPolicy: false,
        });
        setErrors({}); //Limpia los errores también, en caso de que los haya habido
      } else {
        throw new Error(result.message || "No se pudo enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar el email:", error);
      setSubmitError(
        "No se ha podido enviar el mensaje. Inténtalo de nuevo en unos instantes.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout headerBg="#4a5c63">
      <div className="flex flex-col min-h-full bg-[#f7f5f2]">
        {/* Franja oscura solo para dar contraste al menú (blanco) en esta página, que no tiene foto de fondo */}
        <div className="w-full h-24 md:h-28 bg-[#4a5c63] flex-shrink-0" />

        <div className="flex-1 flex flex-col items-center justify-center py-10 px-4">
          <h1 className="custom-h2 mb-8 text-center">Contáctanos</h1>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="success"
              sx={{ width: "100%" }}
            >
              ¡Tu mensaje ha sido enviado con éxito!
            </Alert>
          </Snackbar>
          <Snackbar
            open={Boolean(submitError)}
            autoHideDuration={5000}
            onClose={() => setSubmitError("")}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={() => setSubmitError("")}
              severity="error"
              sx={{ width: "100%" }}
            >
              {submitError}
            </Alert>
          </Snackbar>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-5xl mx-auto p-4 bg-[#f7f5f2] rounded-lg mb-8 space-y-4 md:space-y-0">
            {/* Teléfono */}
            <div className="flex flex-col items-center text-center w-[399.8px]">
              <Phone sx={{ color: "#c9a273", fontSize: 40 }} />
              <div className="mt-2">
                <p className="font-playfair text-lg text-[#4a4a4a] mb-1">
                  Teléfono
                </p>
                <p className="font-sans text-[#6b6b6b]">
                  918987654 / 665769021
                </p>
              </div>
            </div>

            {/* Dirección */}
            <div className="flex flex-col items-center text-center w-[399.8px]">
              <LocationOn sx={{ color: "#c9a273", fontSize: 40 }} />
              <div className="mt-2">
                <p className="font-playfair text-lg text-[#4a4a4a] mb-1">
                  Dirección
                </p>
                <p className="font-sans text-[#6b6b6b]">C/Añastro, Madrid</p>
              </div>
            </div>

            {/* Horario */}
            <div className="flex flex-col items-center text-center w-[399.8px]">
              <AccessTime sx={{ color: "#c9a273", fontSize: 40 }} />
              <div className="mt-2">
                <p className="font-playfair text-lg text-[#4a4a4a] mb-1">
                  Horario
                </p>
                <p className="font-sans text-[#6b6b6b]">
                  De lunes a Viernes 09:30h a 18:30h <br />
                  Sábados 09:00h a 14:30h <br />
                  Domingos Cerrado
                </p>
              </div>
            </div>
          </div>

          {/* Aquí está el formulario */}
          <h2 className="custom-h2 mb-4">¿Tienes alguna duda?, ¡Escríbenos!</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-5xl mx-auto p-4 bg-white border border-[#e8e2da] shadow-sm mb-20"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={handleChange}
              value={formData.name}
              className={`mb-4 p-2 border ${
                errors.name ? "border-red-500" : "border-[#e8e2da]"
              } rounded w-full bg-[#f7f5f2] focus:outline-none focus:ring-2 focus:ring-[#c9a273]`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
              <div className="w-full md:w-1/2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                  className={`p-2 mb-4 border ${
                    errors.email ? "border-red-500" : "border-[#e8e2da]"
                  } rounded w-full bg-[#f7f5f2] text-left focus:outline-none focus:ring-2 focus:ring-[#c9a273]`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="w-full md:w-1/2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  onChange={handleChange}
                  value={formData.phone}
                  className={`p-2 mb-4 border ${
                    errors.phone ? "border-red-500" : "border-[#e8e2da]"
                  } rounded w-full bg-[#f7f5f2] text-left focus:outline-none focus:ring-2 focus:ring-[#c9a273]`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Mensaje"
              onChange={handleChange}
              value={formData.message}
              lang="es"
              className={`mb-4 p-2 border ${
                errors.message ? "border-red-500" : "border-[#e8e2da]"
              } rounded w-full bg-[#f7f5f2] h-[150px] focus:outline-none focus:ring-2 focus:ring-[#c9a273]`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="acceptPolicy"
                onChange={handleChange}
                checked={formData.acceptPolicy}
                className="mr-2 accent-[#c9a273] focus:outline-none focus:ring-2 focus:ring-[#c9a273]"
              />
              <span className="text-sm text-[#6b6b6b] font-sans">
                Acepto la{" "}
                <Link
                  to="/politica-privacidad"
                  className="text-[#4a4a4a] underline hover:text-[#c9a273] transition-colors duration-200"
                >
                  Política de Privacidad
                </Link>
              </span>
            </div>
            {errors.acceptPolicy && (
              <p className="text-red-500 text-sm">{errors.acceptPolicy}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="
              border
              border-[#4a4a4a]
              text-[#4a4a4a]
              uppercase
              tracking-[0.2em]
              text-sm
              font-sans
              py-2.5
              px-8
              transition-all
              duration-300
              hover:bg-[#4a4a4a]
              hover:text-white
              disabled:opacity-50
              disabled:cursor-not-allowed
              md:ml-auto
              md:w-auto
            "
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;
