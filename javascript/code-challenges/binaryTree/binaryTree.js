const Node = require('./node')

class BinaryTree {
  constructor(root = null){
    this.root = root;
  }

  //DFS
  preOrder() {
    //Data, Left, Right
    let results = [];

    let _walk = node => {
      results.push(node.value) //Read DATA

      if (node.left) _walk(node.left); //if null @ leaf

      if (node.right) _walk(node.right); //if null @ leaf
    }

  _walk(this.root);
  return results;
  }


  inOrder() {
    // Left, Data, Right
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left); //if null @ leaf

      results.push(node.value) //Read DATA

      if (node.right) _walk(node.right); //if null @ leaf
    }

  _walk(this.root);
  return results;
  }


  postOrder() {
    // left, Right, Data
    let results = [];

    let _walk = node => {
      
      if (node.left) _walk(node.left); //if null @ leaf

      if (node.right) _walk(node.right); //if null @ leaf

      results.push(node.value) //Read DATA
    }

  _walk(this.root);
  return results;
  

  }

  findMaxVal() {
    
    let _walk = node => {

      if(!node) return 0;

      let maximum = 0
      if(node.value > maximum) maximum = node.value; 
      
      const left =  _walk(node.left);
      if(left > maximum) maximum = left;

      const right = _walk(node.right);
      if(right > maximum) maximum = right; 
      return maximum
    }
    
    let results = _walk(this.root);
  return results;

  }

}//BinaryTree End

class BinarySearchTree {

  constructor(root = null){
    this.root = root;
  }

  add(value) {
    if(this.root === null){
      this.root = new Node(value);
      return;
    }

    let _walk = node => {
      

      if (node.left) _walk(node.left); //if null @ leaf

      if (node.right) _walk(node.right); //if null @ leaf

      if(node.value < value) {
        if(node.left === null){
          current.left = new Node(value);
          return;
        }

      } else {
        if(node.right ===null){
          node.right = new Node(value);
          return;
        }
      }      
    }

  _walk(this.root);


  }


  contains(value) {

    if(this.root === null){
      
      return "root node empty";
    }

    let _walk = node => {
      if(value === node.value){
        return true;
      }

      if (node.left) _walk(node.left); //if null @ leaf

      if (node.right) _walk(node.right); //if null @ leaf
    }
    _walk(this.root);
    return false;
  }

}

module.exports = {BinaryTree, BinarySearchTree};