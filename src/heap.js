// max heap, parent node values are greater than those of their children, 
// Inserting any value must maintain the rules of our complete binary heap. Namely:
// 1. The priority of the node that gets inserted cannot be greater than its parent.
// 2. Every level of the heap must be full, except the lowest level, which fills left to right.
// max heap, parent node values are greater than those of their children, 
// Inserting any value must maintain the rules of our complete binary heap. Namely:
// 1. The priority of the node that gets inserted cannot be greater than its parent.
// 2. Every level of the heap must be full, except the lowest level, which fills left to right.

class PriorityQueue {
  constructor {
    this.heap = [null]
  }

  insert(value, priority) {
    const newNode = new Node(value, priority)

    // So, we begin by adding a new node to the end of our heap array.
    this.heap.push(newNode)
    let currentNodeIdx = this.heap.length - 1;
    let currentNodeParentIdx = this.floor(currentNodeIdx / 2);

    // We then need to adjust our heap array in order to obey the rules above. 
    // we know where every node’s parent is, 
    // we check the child node’s priority with its parent and swap them if so. 
    // We continue to do this until the parent node has a lower priority than the child, 
    // or we run out of parent nodes, in which case the new node takes over the highest level of the heap

    // while parent exists and newNode priority > current node priority
    while(this.heap[currentNodeParentIdx] && newNode.priority > this.heap[currentNodeParentIdx].priority) {
      // grab the current parent node
      const parent = this.heap[currentNodeParentIdx]

      // place newNode in parent node spot
      this.heap[currentNodeParentIdx] = newNode

      // set the current spot to the original parent node
      this.heap[currentNodeIdx] = parent;

      // update currentIndex to the parent index
      currentNodeIdx = currentNodeParentIdx;

      // calculate the new parent index
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2)
    }
  }

  remove() {

    if(this.heap.length < 3) {
      const toReturn = this.heap.pop();
      this.heap[0] = null;
      return toReturn;
    }

    const toRemove = this.heap[1];
    // put the last item first in the list
    this.heap[1] = this.heap.pop();
    let currentIdx = 1;

    let [left, right] = [2 * currentIdx, 2 * currentIdx + 1];
    let currentChildIdx = this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left;



  }


}




class Node {
	constructor(val, priority) {
		this.value = val;
		this.priority = priority;
		this.next = null;
	}
}

class BinaryHeap {
  constructor(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }

  push(element) {
    this.content.push(element)
    this.bubbleUp(this.content.length - 1)
  }

  pop() {
    const result = this.content[0]
    const end = this.content.pop()

    if(this.content.length > 0) {
      this.content[0] = end
      this.sinkDown(0);
    }
  }

  remove(node) {
    const n = this.content.length;

    for(let i = 0; i < n; i++) {
      if(this.content[i] === node) {
        const end = this.content.pop();
        if()
      }
    }
  }

}