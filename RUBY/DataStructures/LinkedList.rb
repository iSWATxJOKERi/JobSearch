class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
    self.next.prev = self.prev if self.next
    self.prev.next = self.next if self.prev
    self.next = nil
    self.prev = nil
    self
  end
end

class LinkedList
  attr_reader :head, :tail
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    empty? ? nil : self.head.next
    nil
  end

  def last
    empty? ? nil : self.tail.prev
  end

  def empty?
    self.head.next == self.tail
  end

  def get(key)
    current_node = self.head.next
    until current_node == self.tail
      current_node = current_node.next
      return current_node.val if current_node.key == key
    end
    nil
  end

  def include?(key)
    current_node = self.head.next
    until current_node == self.tail
      current_node = current_node.next
      return true if current_node.key == key
    end
    false
  end

  def append(key, val)
    new_node = Node.new(key, val)

    self.tail.prev.next = new_node
    new_node.prev = self.tail.prev
    new_node.next = self.tail
    self.tail.prev = new_node

    new_node
  end

  def update(key, val)
    current_node = self.head.next
    until current_node == self.tail
      if current_node.key == key
        current_node.val = val
        return current_node
      end
    end
    nil
  end

  def remove(key)
    current_node = self.head.next
    until current_node == self.tail
      if current_node.key == key
        current_node.remove
        return current_node.val
      end
    end
    nil
  end

  def each
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
