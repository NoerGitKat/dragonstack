const Generation = require("./index.js");
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

  async createNewGeneration() {
    // Creates new generation
    const generation = new Generation();

    try {
      // Store new generation in db table
      const { generationId } = await GenerationTable.storeGeneration(
        generation
      );
      this.generation = generation;
      this.generation.generationId = generationId;

      console.log("generation...", this.generation);

      // Recursive, create new generation when previous is expired
      this.timer = setTimeout(
        () => this.createNewGeneration(),
        this.generation.expiration.getTime() - Date.now()
      );
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = GenerationEngine;
