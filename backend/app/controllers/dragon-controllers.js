const GenerationEngine = require("../generation/generation-engine.js");
const engine = new GenerationEngine();

engine.start();

const createDragon = (req, res) => {
  res.json({ dragon: engine.generation.createNewDragon() });
};

exports.createDragon = createDragon;
