import { Router } from 'express';
import sendMail from '../services/emailService.js';

const router = Router();

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await sendMail(name, email, phone, message);
    res.status(200).json({ success: true, message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
});

export default router;
