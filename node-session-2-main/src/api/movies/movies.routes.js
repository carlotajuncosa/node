const express = require('express');

// creamos el router
const router = express.Router();

// añadimos una ruta
router.get('/', (req, res) => {
  return res.send('ESTA ES LA RUTA /movies ');
});

router.get('/one', (req, res) => {
  return res.send('PELICULA ONE');
});

router.get('/two', (req, res) => {
  return res.send('PELICULA TWO');
});

module.exports = router;