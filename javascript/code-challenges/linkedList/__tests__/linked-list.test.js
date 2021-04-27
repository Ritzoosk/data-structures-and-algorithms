'use strict';

// Require our linked list implementation
const LinkedList = require('../lib/linked-list.js');


describe('Linked List', () => {
  it('append should add a node to ll-end', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.append(99);
    newLinkedList.append(999);
    expect(newLinkedList.head.value).toEqual(99);
    expect(newLinkedList.head.next.value).toEqual(999);
  });

  it("inserts value into ll-head and head property will properly point to the first node in the linked list", () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert(99);
    newLinkedList.insert(999);
    expect(newLinkedList.head.value).toEqual(999);
    expect(newLinkedList.head.next.value).toEqual(99);
  });

  it("see if ll includes given value, or does not", () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert(99);
    newLinkedList.insert(999);
    newLinkedList.insert(9999);

    expect(newLinkedList.includes(9999)).toEqual(true);
    expect(newLinkedList.includes(100)).toEqual(false);
  });

  it("see if ll is converted to a string correctly", () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert(99);
    newLinkedList.insert(999);
    newLinkedList.insert(9999);

    expect(newLinkedList.toString()).toEqual("{ 9999 } -> { 999 } -> { 99 } -> NULL");
  });

  it('instantiate a empty ll', () => {
    let newLinkedList = new LinkedList();
    
    
    expect(newLinkedList.head).toEqual(null);
  });


});




// newLinkedList.insert(10);
// console.log(newLinkedList.includes(99));
// console.log("new LL", newLinkedList);
// console.log(newLinkedList.toString());