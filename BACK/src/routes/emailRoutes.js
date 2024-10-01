import Router from 'express';  
import sendMail from '../services/emailService.js';  

const router = Router();  // Crea una instancia del enrutador de Express

// Define la ruta POST para enviar correos
router.post('/', async (req, res) => {
  // Extrae los datos del cuerpo de la solicitud (nombre, email, teléfono, mensaje)
  const { name, email, phone, message } = req.body;

  try {
    // Llama a la función sendMail para enviar el correo con los datos proporcionados
    await sendMail(name, email, phone, message);
    
    // Si el correo se envía correctamente, responde con un estado 200 y un mensaje de éxito
    res.status(200).json({ success: true, message: 'Correo enviado con éxito' });
  } catch (error) {
    // Si hay un error, lo registra en la consola y responde con un estado 500 y un mensaje de error
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
});

export default router;

