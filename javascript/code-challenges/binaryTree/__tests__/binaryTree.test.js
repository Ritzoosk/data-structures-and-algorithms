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

  it(' traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.', () => {
    const newNode5 = new Node(555)
    const newNode4 = new Node(444)

    const newNode2 = new Node(222, newNode4)
    const newNode3 = new Node(333, null, newNode5)
    const newNode = new Node(111, newNode2, newNode3);

    let newTree = new BinaryTree(newNode);

    expect(newTree.breadthFirst(newTree)).toEqual([111,222,333,444,555]);

  });





});
