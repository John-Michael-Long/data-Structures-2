
class Set {
  constructor() {
    this._size = 0;
    this._storage = {};
  }

  add(item){
    if(!this.contains(item)) {
      this._storage[item] = item;
      this._size++;
    }
  }

  contains(item) {
    return !!this._storage[item];
  }

  remove(item) {
    if(this._storage[item]) {
      delete this._storage[item];
      this._size--;
    }
  }
}