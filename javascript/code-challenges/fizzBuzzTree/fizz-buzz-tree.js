'use strict';

const {BinaryTree} = require('../binaryTree/binaryTree');
const Node = require('../binaryTree/node');

const fizzBuzz = (tree) => {
  let newTree = new BinaryTree() 

  if(tree.root) newTree.root = JSON.parse(JSON.stringify(tree.root));

  if (newTree.root.value % 3 === 0) newTree.root.value = "Fizz";
  else if (newTree.root.value % 5 === 0) newTree.root.value = "Buzz";
  
  else if (newTree.root.value % 3 === 0 && newTree.root.value % 5 === 0) newTree.root.value = "FizzBuzz";
  else newTree.root.value = newTree.root.value.toString()

  let _walk = (origNode, fizzBuzzNode) => {
    // results.push(node.value) //Read DATA

    console.log(origNode)

    if (origNode.left) {
      let newNode = new Node(origNode.left.value);
        if (newNode.value % 3 === 0) newNode.value = "Fizz";
        else if (newNode.value % 5 === 0) newNode.value = "Buzz";
        
        else if (newNode.value % 3 === 0 && newNode.value % 5 === 0) newNode.value = "FizzBuzz";
        else newNode.value = newNode.value.toString()
        fizzBuzzNode.left = newNode;
      _walk(origNode.left, fizzBuzzNode.left);

    }
    if (origNode.right) {
      let newNode = new Node(origNode.right.value);

        if (newNode.value % 3 === 0) newNode.value = "Fizz";
        else if (newNode.value % 5 === 0) newNode.value = "Buzz";
        else if (newNode.value % 3 === 0 && newNode.value % 5 === 0) newNode.value = "FizzBuzz";
        else newNode.value = newNode.value.toString();

        fizzBuzzNode.right = newNode;
        _walk(origNode.right, fizzBuzzNode.right);
    }
  }

_walk(tree.root, newTree.root);
return newTree;

}
module.exports = fizzBuzz;