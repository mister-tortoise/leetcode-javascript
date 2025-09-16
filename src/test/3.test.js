const lengthOfLongestSubstring = require('../bin/3');

test('example test case', () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});