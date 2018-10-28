
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const node = new Tree(value);

    this.children.push(node);

  }

  contains(target) {

    if (this.value === target) {
      return true;
    }

    for (let i = 0; i < this.children.length; i++) {
      let node = this.children[i];

      if(node.contains(target)) {
        return true;
      }
    }
    return false;
  }
}