const longestPalindrome = require('../bin/5');

test('example test cases', () => {
  expect(longestPalindrome('babad')).toBe('bab');
  expect(longestPalindrome('cbbd')).toBe('bb');
});