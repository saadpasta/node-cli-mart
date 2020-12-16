var { inventory } = require('./inventory');

const parseInput = (params) => {
  const userCommand = params.split(' ');

  const commandToRun = checkInput(userCommand[0]);
  return commandToRun;
};

const checkInput = (input) => {
  console.log(input);
  switch (input) {
    case 'add':
      return 'Adding';
      break;
    case 'offer':
      return 'Offer Added';
      break;
    case 'bill':
      return 'Print Bill';
      break;
    default:
      return null;
  }
};

module.exports = {
  parseInput: parseInput,
};
