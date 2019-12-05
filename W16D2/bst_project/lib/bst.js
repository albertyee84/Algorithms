class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
  constructor() {
    // initialize the tree to be empty
    this.root = null;
  }

  insert(val, root = this.root) {
    // if the tree is currently empty, then create the node as the 'absolute' root
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    // otherwise, the tree is not empty, so...
    // if our val to insert is less than the root...
    if (val < root.val) {
      if (!root.left) {
        // ...and the left child does not exist,
        root.left = new TreeNode(val); //      then create the node as the left child
      } else {
        // ...and the left child already exists,
        this.insert(val, root.left); //      then recursively insert on the left subtree
      }

      // if our val to insert is greater than or equal to the root...
    } else {
      if (!root.right) {
        //  ...and the right child does not exist,
        root.right = new TreeNode(val); //      then create the node as the right child
      } else {
        //  ...and the right child already exists,
        this.insert(val, root.right); //      then recursively insert on the right subtree
      }
    }
  }

  searchRecur(val, root = this.root) {
    if(!root) return false;

    if (val < root.val) {
        return this.searchRecur(val, root.left);
    } else if (val > root.val) {
        return this.searchRecur(val, root.right);
    } else {
        return true;
    }
  }

  searchIter(val) {
      let curr = this.root;

      while(curr !== null) {
        if (val < curr.val) {
            curr = curr.left;
        } else if (val > curr.val) {
            curr = curr.right;
        } else {
            return true;
        }
      }
      return false;
  }
  
}

module.exports = {
    TreeNode,
    BST
};