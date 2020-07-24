const TRAITS = require("./traits.json");

// Scream case is a convention to describe global variables that don't change
const DEFAULT_PROPERTIES = {
  nickname: "anonymous",
  get birthday() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach((TRAIT) => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;

      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];

      // Pushing different random traits
      traits.push([{ traitType, traitValue }]);
    });

    return traits;
  },
};

class Dragon {
  constructor({ birthday, nickname, traits } = {}) {
    this.birthday = birthday || DEFAULT_PROPERTIES.birthday;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
  }
}

module.exports = Dragon;
