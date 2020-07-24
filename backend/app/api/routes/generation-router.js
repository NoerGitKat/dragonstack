const express = require("express");
const generationRouter = express.Router();

// Controllers
const {
  getNewGeneration,
} = require("./../controllers/generation-controllers.js");

generationRouter.route("/").get(getNewGeneration);

module.exports = generationRouter;
