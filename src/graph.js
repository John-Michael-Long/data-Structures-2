
class Graph {
  constructor(){
    this.nodes = {};
  }

  addNode(value){
    this.nodes[value] = this.nodes[value] || { edges: {} };    
  }

  contains(target){
    return !!this.nodes[target];
  }

  removeNode(target){
    if (this.contains(target)) {
      this.forEachNode( nodeVal => {
        if(this.nodes[nodeVal].edges[target]){
          delete this.nodes[nodeVal].edges[target];
        }
      });

      delete this.nodes[target];
    }
  }

  addEdge(nodeA, nodeB){
    if (this.contains(nodeA) && this.contains(nodeB)) {
      this.nodes[nodeA].edges[nodeB] = nodeB; //this.nodes[nodeB];
      this.nodes[nodeB].edges[nodeA] = nodeA;//this.nodes[nodeA];
    }
  }

  hasEdge(nodeA, nodeB){
    if (this.contains(nodeA) && this.contains(nodeB)) {
      if (this.nodes[nodeA].edges[nodeB] && this.nodes[nodeB].edges[nodeA]) {
        return true;
      }
    }
    return false;
  }

  removeEdge(nodeA, nodeB){
    if(this.contains(nodeA) && this.contains(nodeB)) {
      if (this.hasEdge(nodeA, nodeB)) {
        delete this.nodes[nodeA].edges[nodeB];
        delete this.nodes[nodeB].edges[nodeA];
      }
    }
  }

  forEachNode(callback){
    const keys = Object.keys(this.nodes);

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      callback(key);
    }
  }
}



