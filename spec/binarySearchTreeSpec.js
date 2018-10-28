describe('binarySearchTree', function() {
  let binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstPreOrderTraversal', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstPreOrderTraversal).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstPreOrderTraversal"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.depthFirstPreOrderTraversal(func);
    expect(array).to.eql([5, 2, 1, 3, 4, 7, 6, 8]);
  });

  it('should execute a callback on every value in a tree using "depthFirstInOrderTraversal"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.depthFirstInOrderTraversal(func);
    expect(array).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
