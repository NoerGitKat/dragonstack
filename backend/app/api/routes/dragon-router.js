const express = require("express");
const dragonRouter = express.Router();

// Controllers
const { getNewDragon } = require("../controllers/dragon-controllers.js");

dragonRouter.route("/new").get(getNewDragon);

module.exports = dragonRouter;
