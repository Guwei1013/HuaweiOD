/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (head === null) return;
   
   const list = [];
   let node = head;
   while (node != null) {
     list.push(node);
     node = node.next;
   }
   
   let i = 0, j = list.length - 1;
   while (i < j) {
     list[i].next = list[j];
     i++;
     if (i === j) break;
     list[j].next = list[i];
     j--;
   }
   
   list[i].next = null; 
};