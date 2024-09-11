import server from ".src/server.js";
import { PORT } from ".env.js";

server.listen(PORT || 5000 , () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});