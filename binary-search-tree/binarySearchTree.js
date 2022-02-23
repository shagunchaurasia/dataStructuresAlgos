function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
  if (value < this.value) {
    //Move to left
    //if left child is not present
    if (!this.left) {
      this.left = new BST(value);
    } else {
      this.left.insert(value);
    }
    //if left child if present
  }
  if (value > this.value) {
    if (!this.right) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
};

BST.prototype.contains = function (value) {
  if (value === this.value) {
    return true;
  } else {
    if (value < this.value) {
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }
    }
    if (value > this.value) {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }
};

BST.prototype.depthFirstTraversal = function (iteratorFunction, order) {
  //Order can be of three types : pre, in , post
  //Inorder - Left then parent then right
  //Preorder - Parent then left then right
  //Postorder - All left children, All right then all parent
  if (order === "pre-order") {
    iteratorFunction(this.value);
  }
  if (this.left) {
    this.left.depthFirstTraversal(iteratorFunction, order);
  }
  if (order === "in-order") {
    iteratorFunction(this.value);
  }
  if (this.right) {
    this.right.depthFirstTraversal(iteratorFunction, order);
  }

  if (order === "post-order") {
    iteratorFunction(this.value);
  }
};

BST.prototype.breadthFirstTraversal = function (iteratorFunction) {
  var queue = [this]; //First in first out

  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunction(treeNode);

    if (treeNode.left) {
      queue.push(treeNode.left);
    }
    if (treeNode.right) {
      queue.push(treeNode.right);
    }
  }
};

BST.prototype.getMinVal = function () {
  if (this.left) {
    return this.left.getMinVal();
  } else {
    return this.value;
  }
};

BST.prototype.getMaxVal = function () {
  if (this.right) {
    return this.right.getMaxVal();
  } else {
    return this.value;
  }
};

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(10);
bst.insert(45);
bst.insert(35);
bst.insert(60);
bst.insert(105);
bst.insert(100);
bst.insert(59);
// console.log(bst);

function log(value) {
  console.log(value);
}

console.log(bst.getMaxVal());
console.log(bst.getMinVal());
