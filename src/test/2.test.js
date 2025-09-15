const { arrayToList, listToArray,addTwoNumbers } = require('../bin/2');

test('example test cases 1', () => {
  const l1 = arrayToList([2,4,3]);
  const l2 = arrayToList([5,6,4]);
  expect(listToArray(addTwoNumbers(l1, l2))).toEqual([7,0,8]);
});

test('example test case 2', () => {
  const l1 = arrayToList([0]);
  const l2 = arrayToList([0]);
  expect(listToArray(addTwoNumbers(l1, l2))).toEqual([0]);
});

test('example test case 3', () => {
  const l1 = arrayToList([9,9,9,9,9,9,9]);
  const l2 = arrayToList([9,9,9,9]);
  expect(listToArray(addTwoNumbers(l1, l2))).toEqual([8,9,9,9,0,0,0,1]);
});
