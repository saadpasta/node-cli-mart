#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');
const { parseInput } = require('./commands');
const { readInventoryFile } = require('./inventory');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '$ ',
});

const args = process.argv.slice(2);

const inventoryFileName = args[0];
const commandsFileName = args[1];

// filename is provided then run the interative mode
if (inventoryFileName) {
  readInventoryFile(inventoryFileName)
    .then(() => {
      if (commandsFileName) {
        // command filename is  provided then run automated commad from textfile
        runAutomatedCommands();
      } else {
        rl.prompt();
        rl.on('line', (line) => {
          printResult(line);
          rl.prompt();
        }).on('close', () => {
          console.log('Have a great day!');
          process.exit(0);
        });
      }
    })
    .catch((error) => {
      console.log(error);
      process.exit(0);
    });
} else {
  console.log('Please provide a filename');
  process.exit(0);
}

function runAutomatedCommands() {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(commandsFileName),
    console: false,
  });
  readInterface.on('line', function (line) {
    console.log(`$ ${line}`);
    printResult(line);
  });
}

function printResult(line) {
  const result = parseInput(line.trim());
  console.log(result);

  // exit cli if command is checkout
  if (result === 'done') {
    process.exit(0);
  }
}

module.exports = {
  inventoryFileName,
};
