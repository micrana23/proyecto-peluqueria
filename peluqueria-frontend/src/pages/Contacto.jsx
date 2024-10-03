import React, { useState } from 'react';
import Layout from '../components/Layout';

const Contacto = () => {
  // Estado local que almacena los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Función que se ejecuta cada vez que se cambia un valor en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email enviado con éxito');
      } else {
        alert('Error al enviar el email');
      }
    } catch (error) {
      console.error('Error al enviar el email:', error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">¿Tienes alguna duda? ¡Escríbenos!</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-5xl mx-auto p-4 bg-white shadow-md rounded-lg">
  <input
    type="text"
    name="name"
    placeholder="Nombre"
    onChange={handleChange}
    value={formData.name}
    className="mb-4 p-2 border border-gray-300 rounded w-full max-w-full md:w-[1079.3px] md:h-[53px] bg-pink-100"
  />
  
  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
    {/* Input Email */}
    <div className="flex items-center w-full md:w-1/2">
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
        className="p-2 border border-gray-300 rounded w-full bg-pink-100 text-left"
      />
    </div>

    {/* Input Teléfono */}
    <div className="flex items-center w-full md:w-1/2">
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        onChange={handleChange}
        value={formData.phone}
        className="p-2 border border-gray-300 rounded w-full bg-pink-100 text-left"
      />
    </div>
  </div>

  {/* Textarea Mensaje */}
  <textarea
    name="message"
    placeholder="Mensaje"
    onChange={handleChange}
    value={formData.message}
    className="mb-4 p-2 border border-gray-300 rounded w-full bg-pink-100 md:h-[150px]"
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

