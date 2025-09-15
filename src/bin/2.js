/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  let dummy = new ListNode(0), curr = dummy;
  for (let num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }
  return dummy.next;
}
function listToArray(node) {
  const res = [];
  while (node) {
    res.push(node.val);
    node = node.next;
  }
  return res;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;
        const sum = x + y + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};

module.exports = {
  addTwoNumbers,
  arrayToList,
  listToArray
};