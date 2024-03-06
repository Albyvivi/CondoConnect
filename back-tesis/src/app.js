const express = require("express");
const routes = require("./routes/index");
require("dotenv").config();
const http = require("http");

const app = express();

/**
 * Middleware Set response headers for allow other origins, accept all methods, and accept several request headers
 */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

//para no poner puertos mayores o nulos
const normalizePort = (port) => {
  port = parseInt(port, 10);
  if (isNaN(port)) {
    return port;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof PORT === "string" ? "pipe " + PORT : "port " + PORT;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + PORT;
};

const PORT = normalizePort(process.env.PORT || "3005");
app.set("port", PORT);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(PORT, () => console.log(`Server in port ${PORT}`));
