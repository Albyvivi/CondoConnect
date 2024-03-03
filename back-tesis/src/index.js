const express = require("express");
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas
app.use(require("./routes/index"));

//puertos nuevos
app.listen(3000);
console.log("Server on port 3000");
