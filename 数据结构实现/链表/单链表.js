class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * 向链表尾部追加新的元素
   * @param {any} val
   */
  append(val) {
    const node = new Node(val);
    if (this.length) {
      let cur = this.head;
      /* 找到尾结点 */
      while (cur.next) {
        cur = cur.next;
      }
    } else {
      this.head = node;
    }
  }

  /**
   * 翻转链表
   */
  reverse() {
    let last = null;
    let cur = this.head;
    while (cur.next) {
      const node = cur.next;
      cur.next = last;
      last = cur;
      cur = node;
    }
    this.head = cur;
  }

  travel() {
    let node = this.head;
    while (node) {
      console.log(node.val);
    }
  }
}

const list = new SinglyLinkedList();
for (let i = 0; i < 9; i++) {
  list.append(i);
}
list.reverse();
list.travel();
