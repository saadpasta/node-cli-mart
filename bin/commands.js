/**
 *
 * @param {string} params Complete user input from cli
 * @param {string} params[0] Input command like (add) , (offer) ,(bill) and (checkout) from which we decide how to procced
 * @param {string} params[1] Name of product or offer.
 * @param {string} params[2] Number of product if command is (add) and name of product if command is (offer)
 *
 */

let {
  addProductToCart,
  cart,
  printBill,
  addOfferOnProduct,
  checkout,
} = require('./app');

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
    case 'offer':
      return addOfferOnProduct(params[1], params[2]);
    case 'bill':
      return printBill();
    case 'checkout':
      return checkout();
    default:
      return 'No such command found';
  }
};

module.exports = {
  parseInput: parseInput,
};
