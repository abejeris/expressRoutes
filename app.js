const express = require("express");

const configureRoutes = require("./routes.js");

const app = express();

const port = 3000;

configureRoutes(app);

app.listen(port, () => console.log(`DA PORT IS RUNNING ON ZE NUMBER ${port}`));
