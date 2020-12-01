class GraphNode {
    constructor(val) {
        this.value = val;
        this.neighbors = [];
    }
}

function bfs(starting_node, target_value) {
    let visited = new Set();
    let queue = [starting_node];

    while(queue.length > 0) {
        while(visited.has(queue[0].value)){
            queue.shift();
            if(queue.length === 0) { return null }
        }

        let first = queue.shift();
        if(first.value === target_value) { return first }

        queue = queue.concat(first.neighbors);
        visited.add(first.value)
    }
    return null
}

const graph = {
    'a': ['b', 'c', 'e'],
    'b': [],
    'c': ['b', 'd'],
    'd': [],
    'e': ['a'],
    'f': ['e']
}

function dfs(node, graph, visited = new Set()) {
    if(visited.has(node)) { return null }

    console.log(node);
    visited.add(node);

    for(let i = 0; i < graph[node].length; i++) {
        dfs(graph[node][i], graph, visited)
    }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');

a.neighbors = [b,c,e];
// b.neighbors = [];
c.neighbors = [b,d];
// d.neighbors = [];
e.neighbors = [a];
f.neighbors = [e];

// console.log(bfs(a, "f"));
dfs('f', graph);
