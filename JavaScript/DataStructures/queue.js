function Queue() {
    this.queue = []
}

Queue.prototype.enqueue = function(el) {
    this.queue.push(el);
    return el;
}

Queue.prototype.dequeue = function() {
    this.queue.shift();
}

Queue.prototype.peek = function() {
    return this.queue[0];
}

const curry = new Queue();
console.log(curry.enqueue("fire"));
curry.dequeue();



