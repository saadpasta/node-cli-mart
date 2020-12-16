#!/usr/bin/env node

const readline = require('readline');
var commands = require('./commands');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '$ ',
});

rl.prompt();
rl.on('line', (line) => {
  const result = commands.parseInput(line.trim());
  console.log(result);
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
