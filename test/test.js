var commands = require('../bin/commands');

test('Intial Testing', async (done) => {
  const result = commands.parseInput('Testing');
  expect(result).toBe('Testing');
  done();
});

test('Checkout with empty cart', async (done) => {
  const result = commands.parseInput('checkout');
  expect(result).toBe('empty cart');
  done();
});

test('Add 5 Soap', async (done) => {
  const result = commands.parseInput('add soap 5');
  expect(result).toBe('added soap 5');
  done();
});

test('Add 1 Bread', async (done) => {
  const result = commands.parseInput('add bread 1');
  expect(result).toBe('added bread 1');
  done();
});

test('Bill', async (done) => {
  const result = commands.parseInput('bill');
  expect(result).toBe('subtotal:52.50, discount:0.00, total:52.50');
  done();
});

test('Check Offer and Discount', async (done) => {
  const result = commands.parseInput('offer buy_2_get_1_free soap');
  expect(result).toBe('offer added');
  done();
});