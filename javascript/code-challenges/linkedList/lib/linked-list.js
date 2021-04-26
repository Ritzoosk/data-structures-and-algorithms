'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    let node = Node(val);
    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  } //END APPEND

  insert(val) {
    let node = Node(val);
    if(!this.head) {
      this.head = node;
    } else { // if LL already exists set the next//
      node.next = this.head; // set next param to this, now this.head is our new node//
      this.head = node;
    }
    return this;
  }

  includes(val) {
    if(!this.head) {
      console.log('nothing to look in');
      return false;
    } else { //go look for it
      console.log("looking for:", val);

      let checkForVal = this.head; // start looking at the head

      while (checkForVal) {
        if(checkForVal === val) {
          console.log ("found it!")
          return true;
        }else{
          checkForVal = checkForVal.next
        }
      }
      console.log(`nope the ${val} inst in ${this.head}`)
      return false;
    }
  }

  toString(val) {
    
  }

}

module.exports = LinkedList;
