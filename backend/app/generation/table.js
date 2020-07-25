const pool = require("./../../database-pool.js");

class GenerationTable {
  // It's static so that it can be used without having to instantiate class
  static storeGeneration(generation) {
    return new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO generation(expiration) VALUES($1) RETURNING id",
        [generation.expiration],
        (error, response) => {
          if (error) return reject(error);

          const generationId = response.rows[0].id;

          resolve({ generationId });
        }
      );
    });
  }
}

module.exports = GenerationTable;
