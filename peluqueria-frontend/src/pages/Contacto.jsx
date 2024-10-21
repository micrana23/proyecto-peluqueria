import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptPolicy: false,
  });

  const [errors, setErrors] = useState({});

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

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email enviado con éxito");
      } else {
        alert("Error al enviar el email");
      }
    } catch (error) {
      console.error("Error al enviar el email:", error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-violet-100">
        <h1 className="font-poppins font-light text-xl md:text-3xl lg:text-4xl text-black text-center underline mb-5">
          ¿Tienes alguna duda?, ¡Escríbenos!
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-5xl mx-auto p-4 bg-white shadow-md rounded-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            value={formData.name}
            className={`mb-4 p-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded w-full bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <div className="w-full md:w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                className={`p-2 mb-4 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded w-full bg-pink-100 text-left focus:outline-none focus:ring-2 focus:ring-pink-300`}
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
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded w-full bg-pink-100 text-left focus:outline-none focus:ring-2 focus:ring-pink-300`}
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
            className={`mb-4 p-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded w-full bg-pink-100 h-[150px] focus:outline-none focus:ring-2 focus:ring-pink-300`}
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
              className="mr-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <span className="text-sm">
              Acepto la{" "}
              <Link
                to="/politica-privacidad"
                className="text-blue-500 hover:underline"
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
            className="bg-white text-black border border-black py-2 px-4 rounded hover:bg-gray-100 text-sm md:ml-auto md:w-auto"
          >
            Enviar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contacto;
