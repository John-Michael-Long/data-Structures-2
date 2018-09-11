 class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null; 
  }

  insert(value) {

    if (value < this.value) {
      //go left
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      //go right
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } 
    //else it already exists, do nothing 
  }

  contains(value) {

    if (value === this.value) {
      return true;
    } else if (value < this.value && this.left) {
      return this.left.contains(value);
    } else if (value > this.value && this.right) {
      return this.right.contains(value);      
    } else {
      return false;
    }
  }

  depthFirstPreOrderTraversal(callback) {
    //pre-order traversal
    callback(this.value);

    if (this.left) {
      this.left.depthFirstPreOrderTraversal(callback);
    }
    if (this.right) {
      this.right.depthFirstPreOrderTraversal(callback);
    }
  }

  depthFirstInOrderTraversal(callback) {

    if (this.left) {
      this.left.depthFirstInOrderTraversal(callback);
    }

    callback(this.value);

    if (this.right) {
      this.right.depthFirstInOrderTraversal(callback);
    }

  }

}
