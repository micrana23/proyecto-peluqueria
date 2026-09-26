import { Resend } from "resend";
import { env } from "../config/env.js";

const resend = new Resend(env.resendApiKey);

const sendMail = async (name, email, phone, message) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.com", // cámbialo cuando verifiques tu propio dominio
      to: "micrana61@gmail.com",
      replyTo: email,
      subject: `Consulta de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje: ${message}`,
    });
    console.log("Correo enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    throw new Error("No se pudo enviar el correo");
  }
};

export default sendMail;
