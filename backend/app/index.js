const express = require("express");
const app = express();

const GenerationEngine = require("./generation/generation-engine.js");
const engine = new GenerationEngine();

// Set local variables to express instance
app.locals.engine = engine;

engine.start();

// Routers
const dragonRouter = require("./api/routes/dragon-router.js");
const generationRouter = require("./api/routes/generation-router.js");

// Middlewares
app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: "Error",
    message: err.message,
  });
});

module.exports = app;
