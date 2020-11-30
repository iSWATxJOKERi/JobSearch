class PolyTreeNode {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.children = [];
    }

    parental() {
        return this.parent
    }

    valueOf() {
        return this.value
    }

    childrenOf() {
        return this.children.slice();
    }

    privateChildren() {
        return this.children
    }

    set childrenArray(arr) {
        this.children = arr
    }

    set parentEquals(parent) {
        if(this.parent === parent) { return };

        if(this.parent) {
            let kids = this.parent.privateChildren();
            let arr = [];
            for(let i = 0; i < kids.length; i++) {
                if(kids[i] === this) {
                    kids[i] = "";
                    continue;
                } else {
                    arr.push(kids[i])
                }
            }
            this.parent.childrenArray = arr;
        }
        this.parent = parent;
        parent ? this.parent.children.push(this) : null;
    }

    addChild(child) {
        child.parentEquals = this;
    }

    removeChild(child) {
        if(child) {
            child.parentEquals(nil);
        } else {
            throw "Not a child."
        }
    }

    dfs(target_value) {
        if(this.value === target_value) { return this };
        let kids = this.childrenOf();
        let result;
        for(let i = 0; i < kids.length; i++) {
            result = kids[i].dfs(target_value);
            if(result){ return result }
        }
        return null
    }

    bfs(target_value) {
        let opps = [this];
        while(opps.length !== 0) {
            let first = opps.shift();
            let kids = first.childrenOf();
            if(first.value === target_value){ return first }
            for(let i = 0; i < kids.length; i++) {
                opps.push(kids[i]);
            }
        }
        return null
    }
}

let btd = new PolyTreeNode("root");
let walk = new PolyTreeNode("insane");
let cry = new PolyTreeNode("laugh");

// cry.parentEquals = btd;
// console.log(walk)
// walk.parentEquals = btd;
// console.log(walk)
// btd.addChild(walk);
// btd.addChild(cry);
// console.log(btd.bfs("insane"));
// console.log(btd.parental());

module.exports = PolyTreeNode;

