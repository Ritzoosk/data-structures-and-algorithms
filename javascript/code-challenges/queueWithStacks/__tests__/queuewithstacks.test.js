'use strict';

// Require our linked list implementation
const {PseudoQueue, Node} = require('../queue-with-stacks.js');



describe('queue with stacks', () => {
  it('will enqueue your arg to the queue', () => {
    let newQueueWithStacks = new PseudoQueue();
    newQueueWithStacks.enqueue(new Node(111));
    newQueueWithStacks.enqueue(new Node(222));
    newQueueWithStacks.enqueue(new Node(333));

    expect(newQueueWithStacks.rear.top.value).toEqual(333);
    expect(newQueueWithStacks.rear.top.next.value).toEqual(222);
    expect(newQueueWithStacks.rear.top.next.next.value).toEqual(111);

  });

  it("dequeue nodes off the stacks", () => {
    let newQueueWithStacks = new PseudoQueue();
    newQueueWithStacks.enqueue(new Node(111));
    newQueueWithStacks.enqueue(new Node(222));
    newQueueWithStacks.enqueue(new Node(333));
    const dq = newQueueWithStacks.dequeue();
    expect(newQueueWithStacks.rear.top).toEqual(null);
    expect(newQueueWithStacks.front.top.value).toEqual(222);
    expect(newQueueWithStacks.front.top.next.value).toEqual(333);
    expect(dq).toEqual(111);

  });


});
