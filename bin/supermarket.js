#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');
const commands = require('./commands');

const { readInventoryFile } = require('./inventory');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '$ ',
});

const args = process.argv.slice(2);

const inventoryFileName = args[0];

readInventoryFile(inventoryFileName).then(() => {
  rl.prompt();
  rl.on('line', (line) => {
    const result = commands.parseInput(line.trim());
    console.log(result);

    // exit cli if command is checkout
    if (result === 'done') {
      process.exit(0);
    }

    rl.prompt();
  }).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
  });
});

module.exports = {
  inventoryFileName,
};
