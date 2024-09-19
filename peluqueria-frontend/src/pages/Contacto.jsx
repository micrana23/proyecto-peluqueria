import React, { useState} from 'react';

    const Contacto = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes hacer la llamada al backend para enviar el correo
        console.log(formData);
      };
    
      return (
        <div>
          <h1>Contacto</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Teléfono" onChange={handleChange} />
            <textarea name="message" placeholder="Mensaje" onChange={handleChange}></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      );
    };
    
    export default Contacto;