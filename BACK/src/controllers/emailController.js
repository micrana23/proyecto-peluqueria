// backend/controllers/emailController.js

import sendMail from "../services/emailService.js";

const sendEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await sendMail(name, email, phone, message);
    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al enviar el correo", error });
  }
};

export default sendEmail;
