const Generation = require("./generation.js");

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
    this.generation = new Generation();

    console.log("new generation", this.generation);

    this.timer = setTimeout(
      () => this.createNewGeneration(),
      this.generation.expiration.getTime() - Date.now()
    );
  }
}

module.exports = GenerationEngine;
