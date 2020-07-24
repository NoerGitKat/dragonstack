const express = require("express");
const app = express();

// Routers
const dragonRouter = require("../app/routes/dragon-router.js");

// Middlewares
app.use("/dragon", dragonRouter);

module.exports = app;
