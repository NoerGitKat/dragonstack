const { Pool } = require("pg");
const config = require("./secrets/database-config.js");

const pool = new Pool(config);

module.exports = pool;
