'use strict';

// Require our linked list implementation
const {BinaryTree} = require('../binaryTree.js');
const Node = require('../node')




describe('Binary tree tests', () => {
  

  it('Can successfully return a the max value from a tree traversal', () => {
    const newNode5 = new Node(555)
    const newNode4 = new Node(444)

    const newNode2 = new Node(222, newNode4)
    const newNode3 = new Node(333, null, newNode5)
    const newNode = new Node(111, newNode2, newNode3);

    let newTree = new BinaryTree(newNode);

    expect(newTree.findMaxVal()).toEqual(555);

  });




});
