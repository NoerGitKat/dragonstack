const DragonTable = require("./../../dragon/table.js");

const getNewDragon = async (req, res) => {
  // Create new dragon
  const newDragon = req.app.locals.engine.generation.createNewDragon();

  try {
    // Insert new dragon in table
    const { dragonId } = await DragonTable.storeDragon(newDragon);
    newDragon.dragonId = dragonId;
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Couldn't get new dragon!" });
  }

  return res.json({ dragon: newDragon });
};

exports.getNewDragon = getNewDragon;
