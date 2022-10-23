const express = require('express');
const moviesRoutes = require('./src/api/movies/movies.routes');

const server = express();
const PORT = 3000;

// Añadirle el router a nuestro servidor
server.use('/movies', moviesRoutes);

server.listen(PORT, () => {
  console.log(`Servidor a tope con la cope en http://localhost:${PORT}`);
});