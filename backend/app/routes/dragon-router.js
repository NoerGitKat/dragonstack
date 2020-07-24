const express = require("express");
const dragonRouter = express.Router();

// Controllers
const { createDragon } = require("./../controllers/dragon-controllers.js");

dragonRouter.route("/new").get(createDragon);

module.exports = dragonRouter;
