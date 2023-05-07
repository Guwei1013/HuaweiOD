class LinkedNode {
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
    const node = new LinkedNode(val);

    if (this.length) {
      let cur = this.head;
      /* 找到尾结点 */
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    } else {
      this.head = node;
    }

    this.length++;
  }

  /**
   * 删除链表第 index 个节点
   * @param {number} index
   */
  removeAt(index) {
    /* 边界处理 */
    if (index <= 0 || index > this.length) {
      return;
    }

    /* 哑结点处理头结点的情况 */
    const dummy = new LinkedNode("");
    let i = index - 1;
    let node = dummy;
    node.next = this.head;

    while (i) {
      node = node.next;
      i--;
    }
    node.next = node.next.next;
    this.head = dummy.next;

    this.length--;
  }

  insertAt(index) {
    /* 边界处理 */
    if (index <= 0 || index > this.length) {
      return;
    }
    /* 哑结点处理头结点的情况 */
    const dummy = new LinkedNode("");
    let i = index - 1;
    let node = dummy;
  }

  removeLastAt() {
    /* 边界处理 */
    if (index <= 0 || index > this.length) {
      return;
    }
  }

  insertLastAt() {}

  /**
   * 迭代写法
   * 翻转链表
   */
  reverse() {
    let last = null;
    let cur = this.head;
    while (cur) {
      const node = cur.next;
      cur.next = last;
      last = cur;
      cur = node;
    }
    this.head = last;
  }

  /**
   * 翻转链表递归写法
   */
  reverse2() {
    function reverse(node) {
      if (node === null || node.next === null) {
        return node;
      }
      const head = reverse(node.next);
      node.next.next = node;
      node.next = null;
      return head;
    }

    this.head = reverse(this.head);
  }

  /**
   * 遍历打印链表
   */
  travel() {
    let node = this.head;
    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }

  clear() {
    this.head = null;
    this.length = 0;
  }
}

const list = new SinglyLinkedList()

