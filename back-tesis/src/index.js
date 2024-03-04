const express = require("express");
const routes = './routes/index';
const http = require("http");
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

//rutas
//app.use(require("./routes/index"));

const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const normalizePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
};

const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

const server = http.createServer(app);

server.on("error", onError);
server.on("listening", onListening);
server.listen(port, () => {
    console.log(`Server on port ${process.env.PORT}`);
});