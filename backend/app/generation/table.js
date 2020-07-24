// In this file we'll write database queries that'll store a new Generation object into the db table
const pool = require("./../../database-pool");

class GenerationTable {
  // It's static so that it can be used without having to instantiate class
  static storeGeneration(generation) {
    pool.query("INSERT INTO generation(expiration) VALUES($1)", [
      generation.expiration,
    ]);
  }
}

module.exports = GenerationTable;
