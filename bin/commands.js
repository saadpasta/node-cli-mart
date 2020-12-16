let { inventory } = require('./inventory');
let { addProductToCart, cart, printBill,addOfferOnProduct } = require('./app');

const parseInput = (params) => {
  const userCommand = params.split(' ');
  const commandToRun = checkInput(userCommand);
  return commandToRun;
};

const checkInput = (params) => {
  const input = params[0];
  switch (input) {
    case 'add':
      return addProductToCart(params[1], params[2]);
      break;
    case 'offer':
      return addOfferOnProduct(params[1], params[2]);
      break;
    case 'bill':
      return printBill();
      break;
    default:
      return null;
  }
};

module.exports = {
  parseInput: parseInput,
};
