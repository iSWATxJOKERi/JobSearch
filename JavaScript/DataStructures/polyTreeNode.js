class PolyTreeNode {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.children = [];
    }

    parent() {
        return this.parent
    }

    value() {
        return this.value
    }

    children() {
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
        let kids = this.parent.privateChildren();
        let arr = [];
        if(this.parent) {
            for(let i = 0; i < kids.length; i++) {
                if(kids[i] === this) {
                    kids[i] = "";
                    continue;
                } else {
                    arr.push(kids[i])
                }
            }
        }
        this.parent.childrenArray(arr);
        this.parent = parent;
        parent ? this.parent.children.push(this) : null;
    }

    addChild(child) {
        child.parentEquals(this);
    }

    removeChild(child) {
        if(child) {
            child.parentEquals(nil);
        } else {
            throw "Not a child."
        }
    }

    dfs(target_value) {
        if(this.value === target_value) { return this }
    }
}

let btd = new PolyTreeNode("root");
let walk = new PolyTreeNode("insane");
let cry = new PolyTreeNode("laugh");

walk.parent = btd
console.log(walk)
walk.parent = cry
console.log(walk)