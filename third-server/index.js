//Crear servidor:
const express = require('express');
const PORT = 3000;
const server = express();
//aquí se toma la ruta de la info que se quiere seleccionar
const routerMovies = require('./src/api/movies/movies.routes');

//usar el router en el servidor:
server.use('/', routerMovies);

//Hacer que el servidor escuche:
server.listen(PORT, () => {
    console.log('servidor a la espera de ordenes en http://localhost:${PORT}');
});

