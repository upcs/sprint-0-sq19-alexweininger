const sum = require('../functions');

// test 1
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// test 2
test('adds 1 + -1 to equal 0', () => {
	expect(sum(1, -1)).toBe(0);
})

// purposely failing test
test('adds 1 and 1 to equal 4', () => {
	expect(sum(1, 1)).toBe(4);
})
