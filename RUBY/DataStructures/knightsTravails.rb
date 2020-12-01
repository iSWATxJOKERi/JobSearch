require_relative "polyTreeNode"
require "byebug"

class KnightPathFinder
    MOVES = [
        [-1, 2],
        [-1, -2],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [2, 1],
        [2, -1]
    ]

    def self.valid_moves(pos)
        valid_positions = []
        l,r = pos
        MOVES.each do |move|
            if (move[0] + l < 8 && move[0] + l >= 0) && (move[1] + r < 8 && move[1] + r >= 0)
                valid_positions << [move[0] + l, move[1] + r]
            end
        end
        valid_positions
    end

    attr_reader :root_node
    def initialize(start_pos)
        @root_node = PolyTreeNode.new(start_pos)
        @considered_positions = [@root_node.value]
        build_move_tree
    end

    def build_move_tree
        queue = [@root_node]
        # answer = []
        while queue.length > 0 
            first = queue.shift
            add = new_move_positions(first.value)
            # answer += add

            add.each do |node|
                child = PolyTreeNode.new(node)
                first.add_child(child)
            end

            queue += first.children
        end
        # answer
    end

    def new_move_positions(pos)
        new_array = []
        array = KnightPathFinder.valid_moves(pos) 
        array.each do |ele|
            if !@considered_positions.include?(ele)
                @considered_positions << ele
                new_array << ele
            end
        end
        return new_array
    end

    def find_path(end_pos)
        end_position = @root_node.dfs(end_pos)
        trace_path_back(end_position)
    end

    def trace_path_back(end_node)
        path = []
        current_node = end_node

        until current_node.nil?
            path << current_node.value
            current_node = current_node.parent
        end
        path.reverse
    end
end

g = KnightPathFinder.new([0,0])
p g.find_path([6, 2])
