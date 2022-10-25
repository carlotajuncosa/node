const express = require('express'); //express por defecto

const router = express.Router(); //declarar router para trabajar con rutas

router.get('/', (req, res) => {
    return res.status(200).json('SERVIDOR OK, ROUTE INDEX PRINCIPAL');
});

module.exports = router; //para exporar info del documento a index.js