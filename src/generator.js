const faker = require(`faker`);

module.exports = (n) => {
  return new Array(n).fill("").map((_) => faker.helpers.userCard());
};
