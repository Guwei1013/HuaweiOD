var MyStack = function() {
  this.queue = []
};

/** 
* 保证队列的元素按照栈顶向栈底排列
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  const len = this.queue.length
  this.queue.push(x)
  for(let i=0; i<len; i++) {
      this.queue.push(this.queue.shift())
  }
};

/**
* @return {number}
*/
MyStack.prototype.pop = function() {
return this.queue.shift()
};

/**
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.queue[0]
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.queue.length === 0
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/