const express = require("express");

const PORT = 3000;
const server = express();
const router = express.Router();

router.get("/huevos-fritos", (request, response) => {
  const huevosFritos = {
    cantidad: 4,
    variedad: "huevos rotos",
    patatas: true,
  };
  return response.send(huevosFritos);
});
 


router.get("/", (request, response) => {
  //request
  const tortillinha = {
    huevos: 3,
    patatas: "muchas",
    punto: "poco hecha",
  };
  console.log("Hemos entrado en la ruta");
  //request

  return response.send(tortillinha);
});


server.use('/', router);

server.listen(PORT, () => {
  console.log(
    `el robot está en la puerta http://localhost:${PORT} servidor ready`
  );
});
