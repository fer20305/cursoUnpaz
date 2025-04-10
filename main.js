const express = require("express");
const cursos = require("./data/cursos.json");
const app = express();

app.get("/cursos", (req, res) => {
  res.status(200).json({ data: cursos, cantidad: cursos.length });
});

app.listen(4001, () => {
  console.log("La aplicación arranco en el puerto: 4001");
});
