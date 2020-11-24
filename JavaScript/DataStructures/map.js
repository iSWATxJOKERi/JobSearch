function Map() {
    this.array = [];
}

Map.prototype.set = function(key, value) {
    if(this.get(key)) {
        for(let i = 0; i < this.array.length; i++) {
            if(this.array[i][0] === key) {
                this.array[i][1] = value;
            }
        }
    } else {
        this.array.push([key, value]);
    }
}

Map.prototype.get = function(key) {
    for(let i = 0; i < this.array.length; i++) {
        if(this.array[i][0] === key) {
            return this.array[i][1]
        }
    }
    return false
}

Map.prototype.delete = function(key) {
    if(this.get(key)) {
        for(let i = 0; i < this.array.length; i++) {
            if(this.array[i][0] === key) {
                this.array[i] = ""
            }
        }
        let arr = [];
        for(let j = 0; j < this.array.length; j++) {
            if(this.array[j] !== "") {
                arr.push(this.array[j])
            }
        }
        this.array = arr;
    } else {
        return "Not found";
    }
}

Map.prototype.show = function() {
    console.log(this.array);
}

let feds = new Map();
feds.set(1,2);
feds.set(3,4);
feds.set(5,6);
feds.show();
feds.delete(3);
feds.show();