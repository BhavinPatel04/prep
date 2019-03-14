/**
 * Binary Search Tree
 */

class Node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  };
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  };

  getRootNode() {
    return this.root;
  };

  insert(value) {
    const newNode = new Node(value);

    if(!this.root) {
      this.root = newNode;
      return;
    };

    let root = this.getRootNode();

    while(root) {
      if(newNode.value < root.value) {
        if(!root.left) {
          root.left = newNode;
          break;
        }
        root = root.left;
      } else {
        if(!root.right) {
          root.right = newNode;
          break;
        }
        root = root.right;
      }
    };
  };

  remove(value, root) {
    if(!this.root) return;

    if(!root) {
      this.root = this.remove(value, this.root);
    } else if(value < root.value && root.left) {
      root.left = this.remove(value, root.left);
    } else if(value > root.value && root.right) {
      root.right = this.remove(value, root.right);
    } else if(value == root.value) {
      if(root.left && root.right) {
        root.value = findMinNode(root.right);
        root.right = this.remove(root.value, root.right);
      } else {
        root = root.left || root.right;
      }
    }

    function findMinNode(node) {
      if(node.left === null) return node.value; 
      else return findMinNode(node.left); 
    };

    return root;
  };

  preorder(node) {
    if(!node) return;

    console.log('==> Preorder Value:',node.value);
    this.preorder(node.left);
    this.preorder(node.right);
  };

  inorder(node) {
    if(!node) return;

    this.inorder(node.left);
    console.log('==> Inorder Value:',node.value);
    this.inorder(node.right);
  };

  postorder(node) {
    if(!node) return;

    this.postorder(node.left);
    this.postorder(node.right);
    console.log('==> Postorder Value:',node.value);
  };

  search(node, value) {
    if(!node) return null;

    if(value < node.value) {
      return this.search(node.left, value);
    } else if(value > node.value) {
      return this.search(node.right, value);
    } else {
      return node
    }
  };
}

const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.remove(4);
bst.preorder(bst.getRootNode());
bst.inorder(bst.getRootNode());
bst.postorder(bst.getRootNode());
console.log('Search ==>', bst.search(bst.getRootNode(), 5));

console.log(bst.root);