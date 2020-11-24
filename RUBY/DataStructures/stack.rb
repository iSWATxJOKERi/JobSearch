class Stack
    def initialize
        @stack = []
    end

    def push(el)
        stack.push(el)
        el
    end

    def pop
        stack.pop
    end

    def peek
        stack.last
    end

    private
    
    attr_reader :stack
end

rover = Stack.new
print rover.push("wait")
print rover.peek