//este archivo sirve para entrelazar las rutas
const express = require('express');

//se tiene que crear otro ruter para poder utilizar las rutas.get, 
//para pasar los datos de las películas:
const router = express.Router(); 

//se piden los datos del archivo movies.data:
const allMovies = require('./movies.data');

//console.log(allMovies);

router.get('/', (request, response) => {
    return response.send('estamos en la ruta');
});

router.get('/movies', (request, response) => {
    return response.send(allMovies);
});

/* router.get('/harry-potter', (request, response) => {
    return response.send(allMovies.harryPotter);
});

router.get('/marvel-sagas', (request, response) => {
    return response.send(allMovies.marvelSagas);
}); */

module.exports = router;
