'use strict';

// Require our linked list implementation
const {BinaryTree} = require('../../binaryTree/binaryTree.js');
const Node = require('../../binaryTree/node')
const fizzBuzzTree = require('../fizz-buzz-tree')



describe('Binary tree tests', () => {
  

  it('Can successfully return a  tree with fizzbuzz switched in all over', () => {
    const newNode5 = new Node(7)
    const newNode4 = new Node(15)

    const newNode2 = new Node(5, newNode4)
    const newNode3 = new Node(6, null, newNode5)
    const newNode = new Node(3, newNode2, newNode3);

    let newTree = new BinaryTree(newNode);
    
    let fizBuzzResult = fizzBuzzTree(newTree)
    expect(fizBuzzResult.root.value).toEqual("Fizz");
    expect(fizBuzzResult.root.left.value).toEqual("Buzz");
    expect(fizBuzzResult.root.right.value).toEqual("Fizz");
    expect(fizBuzzResult.root.left.left.value).toEqual("FizzBuzz");
    expect(fizBuzzResult.root.right.right.value).toEqual("7");

  });
});
