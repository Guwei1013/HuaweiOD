/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const dummy = new ListNode(-1)
  let cur = dummy
  let node = head
  while (node) {
      if (node.val !== val) {
          cur.next = new ListNode(node.val)
          cur = cur.next
      }
      node = node.next
  }
  return dummy.next
};