import sendMail from "../services/emailService.js";
import { validateContactPayload } from "../utils/contactValidation.js";

const sendEmail = async (req, res) => {
  const { errors, values } = validateContactPayload(req.body);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Revisa los datos del formulario",
      errors,
    });
  }

  try {
    await sendMail(values.name, values.email, values.phone, values.message);
    return res.status(200).json({
      success: true,
      message: "Correo enviado con éxito",
    });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return res.status(500).json({
      success: false,
      message: "Error al enviar el correo",
    });
  }
};

export default sendEmail;
