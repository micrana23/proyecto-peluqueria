import express from "express";
import cors from "cors";
import emailRoutes from "./src/routes/emailRoutes.js"; // Ajusta la ruta para que apunte a `emailRoutes.js` dentro de `src`
import errorHandler from "./src/middlewares/errorHandler.js"; // Ajusta la ruta para que apunte a `errorHandler.js` dentro de `src`
import { env } from "./src/config/env.js";

const app = express();

app.use(cors(env.corsOrigins?.length ? { origin: env.corsOrigins } : undefined));
app.use(express.json({ limit: "10kb" }));

// Ruta para la raíz (opcional)
app.get("/", (req, res) => {
  res.send("Bienvenido al servidor de Peluquería Xtylo"); // Respuesta simple para la ruta raíz
});

// Rutas
app.use("/api/send-email", emailRoutes);

// Middleware para manejar errores 404
app.use((req, res, next) => {
  console.log(`Ruta no encontrada: ${req.originalUrl}`);
  res.status(404).json({ message: "Error 404: Not found" });
});

// Middleware para manejar otros errores
app.use(errorHandler);

export default app;
