require 'set'

class GraphNode
    attr_reader :value
    attr_accessor :neighbors
    def initialize(val)
        @value = val
        @neighbors = []
    end
end

def bfs(starting_node, target_value)
    visited = Set.new()
    queue = [starting_node]

    while queue.length > 0
        until !visited.include?(queue[0].value)
            queue.shift
            return nil if queue.length == 0
        end
        
        first = queue.shift

        return first if first.value == target_value
        
        queue += first.neighbors if first.neighbors
        visited.add(first.value)
    end
    return nil
end

graph = {
  'h': ['i', 'j'],
  'i': [],
  'j': ['k'],
  'k': [],
  'l': ['m'],
  'm': []
}

def dfs(graph)
    visited = Set.new();
    graph.keys.each do |key|
        _dfs(key, graph, visited)
    end
end

def _dfs(node, graph, visited)
    return nil if visited.include?(node.to_sym)

    puts node
    visited.add(node.to_sym)

    graph[node.to_sym].each do |neighbor|
        _dfs(neighbor, graph, visited)
    end
end

dfs(graph)

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b,c,e]
c.neighbors = [b,d]
e.neighbors = [a]
f.neighbors = [e]

# p bfs(a, 'f')

