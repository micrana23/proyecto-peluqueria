import nodemailer from "nodemailer";
import mailConfig from "../config/mailConfig.js";

const sendMail = async (name, email, phone, message) => {
  try {
    const transporter = nodemailer.createTransport(mailConfig);

    const mailOptions = {
      from: email, // Email del remitente
      to: "micrana61@gmail.com", // Tu email donde recibirás los mensajes
      subject: `Consulta de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Correo enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    throw new Error("No se pudo enviar el correo");
  }
};

export default sendMail;
