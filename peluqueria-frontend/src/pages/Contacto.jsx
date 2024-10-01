import React, { useState } from 'react';

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

  // JSX para renderizar el formulario de contacto
  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>  {/* Cuando el formulario se envía, llama a handleSubmit */}
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}  // Actualiza el estado cuando cambia el valor de este campo
          value={formData.name}    // El valor del input es el valor almacenado en formData.name
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          onChange={handleChange}
          value={formData.phone}
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          onChange={handleChange}
          value={formData.message}
        ></textarea>
        <button type="submit">Enviar</button> 
      </form>
    </div>
  );
};

export default Contacto;
