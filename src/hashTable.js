class HashTable {
  constructor() {
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
  }

  insert(key, value) {
    let index = getIndexBelowMaxForKey(key, this._limit);
    let bucket = this._storage.get(index)

    if (!bucket) {
      bucket = [[key, value]];
      this._storage.set(index, bucket);
    } else {
      let count = 0;
      let isFound = false;

      //factor this out later using retreive
      while (!isFound && count < bucket.length) {
        if (bucket[count][0] === key) {
          bucket[count][1] = value;
          isFound = true;
        }
        count++;
      }
      if (!isFound) {
        bucket.push([key, value]);
      }

      this._storage.set(index, bucket);
    }
  }

  retrieve(key) {
    let index = getIndexBelowMaxForKey(key, this._limit);
    let bucket = this._storage.get(index)

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return false;    
  }

  remove(key) {

  }
}
