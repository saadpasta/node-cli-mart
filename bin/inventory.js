const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
  input: fs.createReadStream('inventory.csv'),
  output: process.stdout,
  console: false,
});

const inventory = {};
readInterface.on('line', function (line) {
  const product = line.split(',');
  inventory[product[0]] = {
    amount: product[1],
    quantity: product[2],
  };
});

module.exports = {
  inventory: inventory,
};
