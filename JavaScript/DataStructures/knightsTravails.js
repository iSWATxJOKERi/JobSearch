const PolyTreeNode = require('./polyTreeNode');

const MOVES = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1]
]

class KnightPathFinder {
    constructor(starting_position) {
        this.root_node = new PolyTreeNode(starting_position);
        this.considered_positions = [this.root_node.value];
        this.build_move_tree();
    }

    build_move_tree() {
        let queue = [this.root_node];

        while(queue.length > 0) {
            let first = queue.shift();
            let add = this.new_move_positions(first.value);

            let children = [];
            for(let i = 0; i < add.length; i++) {
                let child = new PolyTreeNode(add[i]);
                first.addChild(child);
                children.push(child);
            }
            queue = queue.concat(children);
        }
    }

    static valid_moves(pos) {
        let l = pos[0];
        let r = pos[1];
        let valid_positions = [];

        for(let i = 0; i < MOVES.length; i++) {
            if((MOVES[i][0] + l >= 0 && MOVES[i][0] + l < 8) && (MOVES[i][1] + r >= 0 && MOVES[i][1] + r < 8)) {
                valid_positions.push([MOVES[i][0] + l, MOVES[i][1] + r])
            }
        }
        return valid_positions;
    }

    new_move_positions(pos) {
        let valid = KnightPathFinder.valid_moves(pos);
        let new_positions = [];
        for(let i = 0; i < valid.length; i++) {
            let included = 0;
            for(let j = 0; j < this.considered_positions.length; j++) {
                if(valid[i][0] === this.considered_positions[j][0] && valid[i][1] === this.considered_positions[j][1]) {
                    j = this.considered_positions.length;
                    included += 1;
                }
            }
            if(included !== 1) {
                new_positions.push(valid[i])
                this.considered_positions.push(valid[i])
            }
        }
        return new_positions;
    }

    find_path(end_pos) {
        let ep = this.root_node.dfs(end_pos);
        return this.trace_path_back(ep);
    }

    trace_path_back(end_node) {
        let path = [];

        let current_node = end_node;
        while(current_node !== null) {
            path.unshift(current_node.value)
            current_node = current_node.parent
        }
        return path
    }
}

let j = new KnightPathFinder([0,0]);
let node = j.find_path([6,2]);
console.log(node);
// console.log(j.trace_path_back(node));
