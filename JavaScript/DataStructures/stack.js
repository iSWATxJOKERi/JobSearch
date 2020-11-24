function Stack() {
    this.stack = []
}

Stack.prototype.push = function(el) {
    this.stack.push(el);
    return el;
}

Stack.prototype.pop = function() {
    this.stack.pop();
}

Stack.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
}

let bass = new Stack();
console.log(bass.push("bass"));
console.log(bass.peek());