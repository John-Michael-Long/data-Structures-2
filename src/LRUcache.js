/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cap = capacity;
  this.store = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.store.has(key)) { return -1; }

  let temp = this.store.get(key);

  this.store.delete(key);

  this.store.set(key, temp);

  return temp;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.store.has(key)) {
    this.store.delete(key);
  }
  this.store.set(key, value);

  if (this.store.size > this.cap) {
    let keys = this.store.keys();
    this.store.delete(keys.next().value);
  }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


