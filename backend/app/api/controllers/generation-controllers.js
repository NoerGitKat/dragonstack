const getNewGeneration = (req, res) => {
  res.json({ generation: req.app.locals.engine.generation });
};

exports.getNewGeneration = getNewGeneration;
