
class SinglyLinkedList {
  constructor() {    
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {

    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }

  }

  removeHead() {

    if (this.head) {
      let removedNode = this.head;
      this.head = this.head.next;
      return removedNode.value;
    }

  }

  contains(target) {
    let node = this.head;
    while(node) {
      if(node.value === target) {
        return true;
      }

      node = node.next; 
    }
    return false;
  }



}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}