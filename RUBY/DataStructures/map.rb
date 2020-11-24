class Map
    def initialize
        @my_array = [];
    end

    def set(key, val)
        if self.get(key)
            my_array.each do |arr|
                arr[1] = val if arr[0] == key
            end
        else
            my_array.push([key, val])
        end
    end

    def get(key)
        my_array.each do |arr|
            return arr[1] if arr[0] == key
        end
        return false;
    end

    def delete(key)
        if self.get(key)
            my_array.each_with_index do |arr, i|
                my_array[i] = "" if arr[0] == key
            end
            rocky = my_array.select{|arr| arr != ""}
            self.my_array = rocky
        else
            return "Not found"
        end
    end

    def show
        p my_array
    end

    private

    attr_accessor :my_array
end

bop = Map.new
bop.set(1,2)
bop.set(2,5)
bop.set(9,8)
bop.show
bop.delete(2)
bop.show
