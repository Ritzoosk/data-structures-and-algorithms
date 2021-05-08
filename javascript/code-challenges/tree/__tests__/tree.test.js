'use strict';

// Require our linked list implementation
const {BinaryTree, BinarySearchTree} = require('../tree.js');
const Node = require('../node')




describe('Binary tree tests', () => {
  it('can instantiate a tree', () => {
    let newTree = new BinaryTree();
    expect(newTree.root).toEqual(null);
  });


  it('can instantiate a tree with a single root', () => {
    const newNode = new Node(111)
    let newTree = new BinaryTree(newNode);
    expect(newTree.root.value).toEqual(111);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    const newNode2 = new Node(222)
    const newNode3 = new Node(333)
    const newNode = new Node(111, newNode2, newNode3);

    let newTree = new BinaryTree(newNode);
    expect(newTree.root.value).toEqual(111);
    expect(newTree.root.left.value).toEqual(222);
    expect(newTree.root.right.value).toEqual(333);

  });

  it('Can successfully return a collection from a preorder traversal', () => {
    const newNode5 = new Node(555)
    const newNode4 = new Node(444)

    const newNode2 = new Node(222, newNode4)
    const newNode3 = new Node(333, null, newNode5)
    const newNode = new Node(111, newNode2, newNode3);

    let newTree = new BinaryTree(newNode);
    expect(newTree.preOrder()).toEqual([111, 222, 444, 333, 555]);

  });

  it('Can successfully return a collection from a preorder traversal', () => {
    const newNode5 = new Node(555)
    const newNode4 = new Node(444)

    const newNode2 = new Node(222, newNode4)
    const newNode3 = new Node(333, null, newNode5)
    const newNode = new Node(111, newNode2, newNode3);

    let newTree = new BinaryTree(newNode);
    expect(newTree.inOrder()).toEqual([444, 222, 111, 333, 555]);

  });

  it('Can successfully return a collection from a preorder traversal', () => {
    const newNode5 = new Node(555)
    const newNode4 = new Node(444)

    const newNode2 = new Node(222, newNode4)
    const newNode3 = new Node(333, null, newNode5)
    const newNode = new Node(111, newNode2, newNode3);

    let newTree = new BinaryTree(newNode);
    expect(newTree.postOrder()).toEqual([444, 222, 555, 333, 111]);

  });




});
