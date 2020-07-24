const express = require("express");
const app = express();

const GenerationEngine = require("./generation/generation-engine.js");
const engine = new GenerationEngine();

app.locals.engine = engine;

engine.start();

// Routers
const dragonRouter = require("./api/routes/dragon-router.js");
const generationRouter = require("./api/routes/generation-router.js");

// Middlewares
app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

module.exports = app;
