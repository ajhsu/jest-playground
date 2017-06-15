var add = require('./index');

test('unit test', function() {
  expect(add(1, 2)).toBe(3);
});

test('browser env supported', function() {
  expect(window).not.toBeNull();
});
