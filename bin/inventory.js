const fs = require('fs');
const readline = require('readline');

const inventory = {};

const readInventoryFile = (filename) => {
  return new Promise(function (resolve, reject) {
    const readInterface = readline.createInterface({
      input: fs.createReadStream(filename),
      console: false,
    });

    readInterface.on('line', function (line) {
      const product = line.split(',');
      inventory[product[0]] = {
        amount: product[1],
        quantity: product[2],
      };
      resolve(true)
    });
  });
};

module.exports = {
  inventory: inventory,
  readInventoryFile,
};
