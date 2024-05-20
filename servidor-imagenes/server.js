const express = require("express");
const path = require("path");
const app = express();

// Configurar la carpeta de imágenes estáticas
app.use("/imagenes", express.static(path.join(__dirname, "imagenes")));

app.get("/", (req, res) => {
  res.send("Servidor de imágenes funcionando");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
