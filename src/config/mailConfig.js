import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

const mailConfig = {
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, // Tu dirección de correo electrónico
    pass: process.env.EMAIL_PASS, // Contraseña de aplicación generada
  },
};

export default mailConfig;

