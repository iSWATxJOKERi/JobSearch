const _ = require('lodash');

class LRUCache {
    constructor(size) {
        this.size = size;
        this.lru_cache = [];
        this.values = new Set(this.lru_cache);
    }

    count() {
        return this.lru_cache.length
    }

    add(ele) {
        if(this.values.has(ele)) {
            if(this.lru_cache.length === this.size) {
                this.lru_cache.shift();
            }
            for(let i = 0; i < this.lru_cache.length; i++) {
                if(ele === this.lru_cache[i]) {
                    this.lru_cache = this.lru_cache.slice(0,i).concat(this.lru_cache.slice(i + 1));
                    this.lru_cache.push(ele);
                }
            }
        } else if(!this.values.has(ele) && !Array.isArray(ele) && ele.constructor !== Object) {
            if(this.lru_cache.length === this.size) {
                this.lru_cache.shift();
            }
            this.lru_cache.push(ele);
        } else {
            let added = false;
            if(this.lru_cache.length === this.size) {
                this.lru_cache.shift();
            }
            for(let i = 0; i < this.lru_cache.length; i++) {
                if(Array.isArray(ele) && Array.isArray(this.lru_cache[i])) {
                    if(this.arrayHelper(ele, this.lru_cache[i])) {
                        this.lru_cache = this.lru_cache.slice(0,i).concat(this.lru_cache.slice(i + 1));
                        this.lru_cache.push(ele);
                        added = true;
                    }
                } else if(ele.constructor === Object && this.lru_cache[i].constructor === Object) {
                    if(_.isEqual(ele, this.lru_cache[i])) {
                        this.lru_cache = this.lru_cache.slice(0,i).concat(this.lru_cache.slice(i + 1));
                        this.lru_cache.push(ele);
                        added = true;
                    }
                }
            }
            added ? null : this.lru_cache.push(ele);
        }
        this.values = new Set(this.lru_cache);
    }

    show() {
        return this.lru_cache;
    }

    arrayHelper(a1, a2) {
        if(a1.length !== a2.length) { return false };
        for(let i = 0; i < a1.length; i++) {
            if(Array.isArray(a1[i]) && Array.isArray(a2[i])) {
                this.arrayHelper(a1[i], a2[i]);
            } else if(a1[i] !== a2[i]) {
                return false;
            }
        }
        return true;
    }
}

let johnny_cache = new LRUCache(4);
johnny_cache.add("I walk the line");
johnny_cache.add(5);

// johnny_cache.count(); // => returns 2

johnny_cache.add([1,2,3]);
johnny_cache.add(5);
johnny_cache.add(-5);
johnny_cache.add({a: 1, b: 2, c: 3});
johnny_cache.add([1,2,3,4]);
johnny_cache.add("I walk the line");
johnny_cache.add(":ring_of_fire");
johnny_cache.add([1,2,3,4]);
johnny_cache.add("I walk the line");
johnny_cache.add({a: 1, b: 2, c: 3});
johnny_cache.add([1,2,3,4]);

console.log(johnny_cache.show());