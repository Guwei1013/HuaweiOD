/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
  const set = new Set();
  const dummy = new ListNode(-1);
  let node = dummy;
  let cur = head;
  while (cur) {
    if (!set.has(cur.val)) {
      node.next = cur;
      node = node.next
      set.add(cur.val)
    }
    cur = cur.next
  }
  node.next = null
  return dummy.next
};