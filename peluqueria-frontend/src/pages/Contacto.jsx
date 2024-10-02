import React, { useState } from 'react';
import Layout from '../components/Layout'; // Asegúrate de ajustar la ruta según tu estructura

const Contacto = () => {
  // Estado local que almacena los datos del formulario
  const [formData, setFormData] = useState({
    name: '',  // Almacena el valor del campo "Nombre"
    email: '',  // Almacena el valor del campo "Email"
    phone: '',  // Almacena el valor del campo "Teléfono"
    message: '' // Almacena el valor del campo "Mensaje"
  });

  // Función que se ejecuta cada vez que se cambia un valor en el formulario
  const handleChange = (e) => {
    // Actualiza el estado del campo correspondiente usando su 'name' y 'value'
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();  // Evita el comportamiento por defecto del formulario (refrescar la página)

    try {
      // Hace una solicitud POST al backend enviando los datos del formulario
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',  // Método HTTP POST
        headers: {
          'Content-Type': 'application/json',  // Define el tipo de contenido como JSON
        },
        body: JSON.stringify(formData),  // Convierte los datos del formulario a formato JSON para enviarlos al backend
      });

      // Verifica si la respuesta del backend fue exitosa
      if (response.ok) {
        alert('Email enviado con éxito');  // Muestra una alerta si el email se envió correctamente
      } else {
        alert('Error al enviar el email');  // Muestra una alerta si hubo un error en el envío del email
      }
    } catch (error) {
      console.error('Error al enviar el email:', error);  // Muestra cualquier error en la consola
    }
  };

  return (
    <Layout>  {/* Envuelve el contenido dentro del Layout */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">Contacto</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            value={formData.name}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            onChange={handleChange}
            value={formData.phone}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            onChange={handleChange}
            value={formData.message}
            className="mb-4 p-2 border border-gray-300 rounded h-32"
          ></textarea>
          <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Enviar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contacto;

