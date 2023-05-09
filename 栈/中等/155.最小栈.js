var MinStack = function() {
  this.stack = [] 
  this.mini = [Infinity]
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  this.mini.push(Math.min(val, this.mini[this.mini.length - 1]))
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.mini.pop()
 
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.mini[this.mini.length - 1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/