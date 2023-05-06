var MyHashSet = function() {
  this.BASE = 10**3
  this.data = new Array(this.BASE).fill(0).map(val => [])
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
 const index = key % this.BASE
 const set = this.data[index]
  for (let i=0; i<set.length; i++) {
      if(set[i] === key) {
         return
      }
  }
  set.push(key)
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  const index = key % this.BASE
  const set = this.data[index]
  const newSet = []
  for(let i=0; i<set.length; i++) {
      if(set[i] !== key) {
         newSet.push(set[i])
      }
  }
  this.data[index] = newSet
};

/** 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  const index = key % this.BASE
  const set = this.data[index]
  for (let i=0; i<set.length; i++) {
      if(set[i] === key) {
         return true
      }
  }
  return false
};
