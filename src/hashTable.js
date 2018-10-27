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
      
      this.search(key, (oldValue, index) => {
        if (oldValue !== false) {
          bucket[index][1] = value;
        } else {
          bucket.push([key, value]);
        }
      }) 
      
      this._storage.set(index, bucket);
    }
  }

  retrieve(key) {
    return this.search(key, value => {
      return value;
    })   
  }

  remove(key) {
    return this.search(key, (value, index, bucketIndex) => {
      if (value !== false) {
        
      }
    });
  }

  search(key, callback) {
    let index = getIndexBelowMaxForKey(key, this._limit);
    let bucket = this._storage.get(index)

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return callback(bucket[i][1], i, index);      
      }
    }

    return callback(false);  
  }


}




