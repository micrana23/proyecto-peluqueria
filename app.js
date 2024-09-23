import express from 'express';
import cors from 'cors';
import emailRoutes from './src/routes/emailRoutes.js'; // Ajusta la ruta para que apunte a `emailRoutes.js` dentro de `src`
import errorHandler from './src/middlewares/errorHandler.js'; // Ajusta la ruta para que apunte a `errorHandler.js` dentro de `src`
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/send-email', emailRoutes)

// Middleware para manejar errores 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Error 404: Not found' });
});

// Middleware para manejar otros errores
app.use(errorHandler);

export default app;

