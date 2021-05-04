'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    let node = new Node(val);
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
    let node = new Node(val);
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
        if(checkForVal.value === val) {
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

  //"{ a } -> { b } -> { c } -> NULL"
  toString() {
  let returnString = '';
    if(!this.head) {
      console.log('nothing to look in');
      return false;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        returnString += `{ ${currentNode.value} } -> `;
        currentNode = currentNode.next;
      }
      return returnString += 'NULL';
    }
  }

  insertBefore(val, newVal) {
    if(!this.head) {
      console.log('nothing to look in');
      return "Value not found";
    } else { //go look for it
      console.log("looking for:", val);

      let checkForVal = this.head; // start looking at the head
      if(checkForVal.value === val){
        this.head = new Node(newVal);
        this.head.next = checkForVal;
      }
      while (checkForVal.next) {
        if(checkForVal.next.value === val) { // refactor with includes()
          console.log ("found it!");
          let newNode = new Node(newVal);
          let holdVal = checkForVal;
          newNode.next = holdVal.next
          holdVal.next = newNode;
          
          return true;
        }else{
          checkForVal = checkForVal.next //goto the next position
        }
      }
      console.log(`nope the ${val} inst in ${this.head}`)
      return "Value not found";
    }
  }

  insertAfter(val, newVal) {
    if(!this.head) {
      console.log('nothing to look in');
      return "Value not found";
    } else { //go look for it
      console.log("looking for:", val);

      let checkForVal = this.head; // start looking at the head
      while (checkForVal.next) {
        if(checkForVal.value === val) {
          console.log ("found it!");
          let newNode = new Node(newVal);
          let holdVal = checkForVal.next; //look at this again
          checkForVal.next = newNode;
          checkForVal.next.next = holdVal;
          return true;
        }else{
          checkForVal = checkForVal.next //goto the next position
        }
      }
      console.log(`nope the ${val} inst in ${this.head}`)
      return "Value not found";
    }
  }

  kthfromend(k) {
    if(!this.head) {
      return false;
    } else {
      //count LL to determine length
      // length minus k
      // walk into that position in ll and return value
    }
  }

  zipLists(list1, list2) {
    if(!this.head) {
      return false;
    } else {
      // with a 'reader' walking up each list sequentially
      // add alternating values to a new LL? OR add list 2 into list1
      // going to need to store nodes of either list to avoid losing the "links"
    }
  }

}




module.exports = LinkedList;
