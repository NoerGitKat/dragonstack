const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Routers
const dragonRouter = require("./routes/dragon-router.js");

// Middlewares
app.use("/dragon", dragonRouter);

app.listen(PORT, () => {
  console.log(`The web server is listening to port ${PORT}!`);
});
