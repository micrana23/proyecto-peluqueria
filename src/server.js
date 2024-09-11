const express = require('express');
const cors = require('cors');
const emailRoutes= require('./routes/emailRoutes');
const errorHandler= require('./middlewares/errorHandler');

const server = express();

server.use(cors());
server.use(express.json());

//Rutas
server.use('/send-email', emailRoutes);

//Middleware para manejar errores 404
server.use((req, res, next) => {
    res.status(404).json({ message: 'Página no encontrada '});
});

//Middleware para manejar otros errores
server.use(errorHandler);

export default server;