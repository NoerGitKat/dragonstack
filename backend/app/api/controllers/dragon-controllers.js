const getNewDragon = (req, res) => {
  res.json({ dragon: req.app.locals.engine.generation.createNewDragon() });
};

exports.getNewDragon = getNewDragon;
