describe('singlyLinkedList', function() {
  var singlyLinkedList;

  beforeEach(function() {
    singlyLinkedList = new SinglyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(singlyLinkedList).to.have.property('head');
    expect(singlyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(singlyLinkedList.addToTail).to.be.a('function');
    expect(singlyLinkedList.removeHead).to.be.a('function');
    expect(singlyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    singlyLinkedList.addToTail(4);
    expect(singlyLinkedList.tail.value).to.equal(4);
    singlyLinkedList.addToTail(5);
    expect(singlyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    singlyLinkedList.addToTail(4);
    singlyLinkedList.addToTail(5);
    expect(singlyLinkedList.head.value).to.equal(4);
    singlyLinkedList.removeHead();
    expect(singlyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    singlyLinkedList.addToTail(4);
    expect(singlyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    singlyLinkedList.addToTail(4);
    singlyLinkedList.addToTail(5);
    expect(singlyLinkedList.contains(4)).to.equal(true);
    expect(singlyLinkedList.contains(5)).to.equal(true);
    expect(singlyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    singlyLinkedList.addToTail(4);
    singlyLinkedList.addToTail(5);
    singlyLinkedList.removeHead();
    expect(singlyLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of singlyLinkedList
});
