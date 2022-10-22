//Crear servidor:
const express = require('express');

const PORT = 3000;
const server = express();
//Crear el router en la parte de arriba del código
const router = express.Router();

//usar el router en el servidor:
server.use('/', router);

//Hacer que el servidor escuche:
server.listen(PORT, () => {
    console.log('servidor a la espera de ordenes en http://localhost:${PORT}');
});

//Añadir router.get para recibir las llamadas
router.get('/', (request, response) => {
    return response.send('servidor funcionando');
});


