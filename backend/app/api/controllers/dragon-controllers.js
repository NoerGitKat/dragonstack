const DragonTable = require("./../../dragon/table.js");

const getNewDragon = async (req, res, next) => {
  // Create new dragon
  const newDragon = req.app.locals.engine.generation.createNewDragon();

  try {
    // Insert new dragon in table
    const { dragonId } = await DragonTable.storeDragon(newDragon);
    newDragon.dragonId = dragonId;
  } catch (error) {
    next(error);
  }

  return res.json({ dragon: newDragon });
};

exports.getNewDragon = getNewDragon;
