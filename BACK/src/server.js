import app from "../app.js";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno

const PORT = process.env.PORT || 5000;

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
