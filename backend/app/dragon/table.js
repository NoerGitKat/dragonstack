const pool = require("./../../database-pool.js");

class DragonTable {
  // It's static so that it can be used without having to instantiate class
  static storeDragon(dragon) {
    const { birthday, nickname, generationId } = dragon;
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO dragon(nickname, birthday, "generationId") VALUES($1, $2, $3) RETURNING id',
        [nickname, birthday, generationId],
        (error, response) => {
          if (error) return reject(error);

          const dragonId = response.rows[0].id;

          // Return the dragonId from table
          resolve({ dragonId });
        }
      );
    });
  }
}

module.exports = DragonTable;
