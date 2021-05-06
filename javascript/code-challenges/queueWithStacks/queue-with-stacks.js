'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(node) {
    if (this.isEmpty()){
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node; //now the new node that was pushed in is on "top and its .next is pointing at what was here previously"
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw 'nothing to pop, no nodes in stack';
    } else {
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      return temp;       //store top into temp---point top to temp---set temp.next to NULL---return temp
    }
  }

  peek() {
    if (this.isEmpty()) {
      throw 'nothing to peek, no nodes in stack';
    } else {
      return this.top.value; //here is whats on top!
    }
  }

  isEmpty() {
    return this.top === null; 
  }
} //END STACK


class PseudoQueue {
  constructor(){
    this.front = new Stack();
    this.rear = new Stack();
  }

  enqueue(node) {
    this.rear.push(node); // get in the back of the line, hence rear//
  }

  dequeue() {
    if (this.front.isEmpty()) {
      while(!this.rear.isEmpty()) { //while someone one is in the back of the line
        this.front.push(this.rear.pop());
      }
    }
    return this.front.pop().value; //node comes off the front of the line?
  }
}//END

module.exports = {PseudoQueue, Node};
