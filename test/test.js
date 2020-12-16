var commands = require('../bin/commands');

test('Intial Testing', async (done) => {
  const result = commands.parseInput('Testing');
  expect(result).toBe('Testing');
  done();
});
