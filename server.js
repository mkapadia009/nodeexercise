const express = require("express");
const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = require("./config/keys").PORT;

const router = require("./routes/routes");

const server = require("./services/serverServices").createServer;
const connectDb = require("./models/users").dbCheck;

//Routing
app.use("/", router);

app.listen(port, server);
