'use strict';

// Require our linked list implementation
const {AnimalShelter, Node} = require('../animal-shelter.js');



describe('queue with stacks', () => {
  it('will enqueue your arg to the queue', () => {
    let newQueueWithStacks = new AnimalShelter();
    newQueueWithStacks.enqueue(new Node({type: 'dog', name:'testdog'}));
    newQueueWithStacks.enqueue(new Node({type: 'dog', name:'testdog1'}));
    newQueueWithStacks.enqueue(new Node({type: 'dog', name:'testdog2'}));

    expect(newQueueWithStacks.rear.top.value).toEqual({type: 'dog', name:'testdog2'});
    expect(newQueueWithStacks.rear.top.next.value).toEqual({type: 'dog', name:'testdog1'});
    expect(newQueueWithStacks.rear.top.next.next.value).toEqual({type: 'dog', name:'testdog'});

  });

  it("dequeue nodes off the stacks", () => {
    let newQueueWithStacks = new AnimalShelter();
    newQueueWithStacks.enqueue(new Node({type: 'dog', name:'testdog'}));
    newQueueWithStacks.enqueue(new Node({type: 'cat', name:'testcat'}));
    newQueueWithStacks.enqueue(new Node({type: 'dog', name:'testdog2'}));
    newQueueWithStacks.enqueue(new Node({type: 'cat', name:'testcat2'}));

    const dq = newQueueWithStacks.dequeue('cat');
    expect(newQueueWithStacks.rear.top).toEqual(null);
    expect(newQueueWithStacks.front.top.value).toEqual({type: 'dog', name:'testdog'});
    expect(newQueueWithStacks.front.top.next.value).toEqual({type: 'dog', name:'testdog2'});
    expect(dq).toEqual({type: 'cat', name:'testcat'});

  });


});
