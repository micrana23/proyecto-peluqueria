// backend/services/emailService.js

import nodemailer from 'nodemailer';
import mailConfig  from '../config/mailConfig.js';

const sendMail = async (name, email, phone, message) => {
  const transporter = nodemailer.createTransport(mailConfig);

  const mailOptions = {
    from: email,
    to: 'micrana61@gmail.com',
    subject: `Consulta de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje: ${message}`,
  };

  await transporter.sendMail(mailOptions);
};

export default sendMail;
