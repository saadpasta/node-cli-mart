var commands = require('../bin/commands');
const { readInventoryFile, inventory } = require('../bin/inventory');
readInventoryFile('inventory.csv');

test('Read Inventory File', async (done) => {
  const result = commands.parseInput('add soap 5');
  return readInventoryFile('inventory.csv').then(() => {
    done();
  });
});

test('Checkout with empty cart', async (done) => {
  const result = commands.parseInput('checkout');
  console.log(inventory);
  expect(result).toBe('empty cart');
  done();
});

test('Add 1 Bread', async (done) => {
  const result = commands.parseInput('add bread 1');
  expect(result).toBe('added bread 1');
  done();
});

test('Add 5 Soap', async (done) => {
  const result = commands.parseInput('add soap 5');
  expect(result).toBe('added soap 5');
  done();
});

test('Check Offer and Discount', async (done) => {
  const result = commands.parseInput('offer buy_2_get_1_free soap');
  expect(result).toBe('offer added');
  done();
});

test('Checkout', async (done) => {
  const result = commands.parseInput('checkout');
  expect(result).toBe('done');
  done();
});
