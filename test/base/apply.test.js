
test('custom apply', () => {
  const array = ['a', 'b'];
  const elements = [0, 1, 2];
  expect(array.push.myApply(array, elements)).toBe(["a", "b", 0, 1, 2]);
});
