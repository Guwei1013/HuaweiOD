/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;
  let last = null;
  let cur = head;
  while (cur) {
    const node = cur.next;
    cur.next = last;
    last = cur;
    cur = node;
  }
  return last;
};


var reverseList = function(head) {
  if(!head) return null
    let last = null
   let cur = head
   while(cur) {
     const node = cur.next
     cur.next = last
     last = cur
     cur = node
   }
   return last
};



/**
 * 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head 
  }
  const result = reverseList(head.next)
  head.next.next = head
  head.next = null
  return result
};