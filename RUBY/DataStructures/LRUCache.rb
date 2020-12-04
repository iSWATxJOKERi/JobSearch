require 'set'
require 'byebug'

class LRUCache
    attr_reader :size
    def initialize(size)
        @size = size
        @lru_cache = []
        @values = Set.new(@lru_cache)
    end

    def count
        # returns number of elements currently in cache
        @lru_cache.length
    end

    def add(el)
        # adds element to cache according to LRU principle
        if @values.include?(el)
            if @lru_cache.length == @size
                @lru_cache.shift
            end

            @lru_cache.each_with_index do |ele,i|
                if el == ele
                    @lru_cache = @lru_cache[0...i] + @lru_cache[i + 1..-1]
                    # debugger
                    @lru_cache.push(el)
                end
            end
        else
            if @lru_cache.length == @size
                @lru_cache.shift
            end
            # debugger
            @lru_cache.push(el)
        end
        @values = Set.new(@lru_cache)
    end

    def show
        # shows the items in the cache, with the LRU item first
        p @lru_cache
    end

    private
        # helper methods go here!
end

johnny_cache = LRUCache.new(4)

johnny_cache.add("I walk the line")
johnny_cache.add(5)

johnny_cache.count # => returns 2

johnny_cache.add([1,2,3])
johnny_cache.add(5)
johnny_cache.add(-5)
johnny_cache.add({a: 1, b: 2, c: 3})
johnny_cache.add([1,2,3,4])
johnny_cache.add("I walk the line")
johnny_cache.add(:ring_of_fire)
johnny_cache.add("I walk the line")
johnny_cache.add({a: 1, b: 2, c: 3})
johnny_cache.show