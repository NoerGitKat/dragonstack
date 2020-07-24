const Generation = require("./generation.js");
const GenerationTable = require("./table.js");

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }

  start() {
    this.createNewGeneration();
  }

  stop() {
    clearTimeout(this.timer);
  }

  createNewGeneration() {
    // Creates new generation
    this.generation = new Generation();

    console.log("new generation", this.generation);

    // Store new generation in db table
    GenerationTable.storeGeneration(this.generation);

    // Recursive, create new generation when previous is expired
    this.timer = setTimeout(
      () => this.createNewGeneration(),
      this.generation.expiration.getTime() - Date.now()
    );
  }
}

module.exports = GenerationEngine;
