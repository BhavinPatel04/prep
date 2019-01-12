/**
 * #### Queue
 * - FIFO
 * - Add item to the end & remove from front
 * - Linear data structure
 */

module.exports = class Queue {
    constructor() {
        this.items = [];
    };

    //adds an item to the end
    enqueue(item) {
        this.items.push(item);
    };

    //removes the item from front of the queue
    dequeue() {
        if(this.isEmpty()) {
            return 'empty';
        };
        return this.items.shift();
    };

    //returns the front item of the queue
    front() {
        if(this.isEmpty()) {
            return 'empty';
        };
        return this.items[0];
    };

    isEmpty() {
        return this.items.length == 0;
    };

    printQueue() {
        let queue = '';
        this.items.forEach(i => { queue += `${i} `});
        return queue;
    };
};