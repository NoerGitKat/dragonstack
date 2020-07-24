const Dragon = require("../dragon/dragon.js");
const { REFRESH_RATE, SECONDS } = require("../config.js");

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    // Establishes time period that it takes before a new generation can get made
    this.expiration = this.calculateExpiration();
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));

    const msUntilExperation =
      Math.random() * 0.5
        ? refreshRate - expirationPeriod
        : refreshRate + expirationPeriod;

    return new Date(Date.now() + msUntilExperation);
  }

  createNewDragon() {
    if (Date.now() > this.expiration) {
      throw new Error(`This generation expired on ${this.expiration}!`);
    }

    return new Dragon();
  }
}

module.exports = Generation;
