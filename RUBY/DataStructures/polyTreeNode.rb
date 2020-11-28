class PolyTreeNode
    attr_reader :parent
    attr_accessor :value

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent
        @parent
    end

    def children
        @children.dup
    end

    def value
        @value
    end

    def parent=(parent)
        return if self.parent == parent

        if self.parent
            self.parent._children.each_with_index do |child, i|
                if child == self
                    self.parent._children[i] = ""
                    arr = self.parent._children.select{|ele| ele != ""}
                    self.parent._children = arr
                end
            end
        end

        @parent = parent
        self.parent._children << self unless self.parent.nil?
    end

    def add_child(child_node)
        child_node.parent=(self)
    end

    def remove_child(child_node)
        if child_node && self._children.include?(child_node)
            child_node.parent=(nil)
        else
            raise "Node is not a child"
        end
    end

    def dfs(target_value)
        return self if self.value == target_value
        self.children.each do |node|
            result = node.dfs(target_value)
            return result unless result.nil?
        end
        nil
    end

    def bfs(target_value)
        exposing = [self]
        while exposing.length != 0
            first = exposing.shift
            return first if first.value == target_value
            first.children.each do |child|
                exposing << child
            end
        end
        nil
    end
    
    def _children
        @children
    end

    protected

    def _children=(children)
        @children = children
    end
end

# btd = PolyTreeNode.new("root")
# walk = PolyTreeNode.new("insane")
# cry = PolyTreeNode.new("laugh")

# walk.parent = btd
# # p btd
# cry.parent = btd
# btd.remove_child(walk)
# p btd._children

