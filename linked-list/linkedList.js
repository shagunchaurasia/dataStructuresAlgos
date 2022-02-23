function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, previous) {
  this.value = value;
  this.next = next;
  this.previous = previous;
}

LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  //if linked list is not empty
  if (this.head) {
    this.head.prev = newNode;
  }
  //if linked list is empty
  else {
    this.tail = newNode;
  }
  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value, null, this.tail);
  //If linkedlist is not empty
  if (this.tail) {
    this.tail.next = newNode;
  }
  //If linkedlist if empty
  else {
    this.head = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
  if (this.head) {
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    return val;
  } else {
    return null;
  }
};

LinkedList.prototype.removeTail = function () {
  var val = this.tail.value;
  if (this.tail) {
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
  } else {
    return null;
  }
  return val;
};

LinkedList.prototype.search = function (searchValue) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.findPosition = function (searchValue) {
  var positions = [];
  var currentNode = this.head;
  var counter = 0;
  while (currentNode) {
    if (currentNode.value == searchValue) {
      positions.push(counter);
    }
    counter++;
    currentNode = currentNode.next;
  }
  return positions;
};

var ll = new LinkedList();
ll.addToHead(100);
ll.addToTail(200);
ll.addToTail(200);
ll.addToTail(200);
ll.addToTail(200);
ll.addToTail(300);
console.log(ll.findPosition(200));
