require 'pry-byebug'

def peak_index_in_mountain_array(arr)
  puts "checking #{arr}"
  # Check array is at least 3 items.
  return '' if arr.count < 3
  # puts 'check 1'

  # Check there is an ascending order to a peak.
  max_index = 0
  count = 0
  until count >= (arr.count - 2) || max_index != 0
    max_index = (count + 1) if (arr[count] < arr[count + 1] && arr[count + 1] > arr[count + 2])
    count += 1
  end
  return 'There is only ascending order' if max_index == 0
  # puts 'check 2'
  # puts "max_index is #{max_index}"

  # Check there is a descending order from a peak
  (arr.count - max_index - 1).times do |time|
    # puts "time = #{time}"
    return 'There is another peak' if arr[max_index + time] <= arr[max_index + time + 1]
  end
  # puts 'check 3'

  max_index
end


def bsearch_manual(arr)
  p arr
  # check mid index
  i = arr.count / 2
  hash = {min: 0, max: arr.count, mid: arr.count / 2}
  until  arr[i - 1] < arr[i] && arr[i] > arr[i + 1]
    # p i
    # if ascending check mid of right
    if arr[i] < arr[i + 1]
      hash[:min] = i
      hash[:mid] = (hash[:min] + hash[:max]) / 2
      i = hash[:mid]
    # if descending check mid of left
    elsif arr[i] > arr[i + 1]
      hash[:max] = i
      hash[:mid] = hash[:max] / 2
      i = hash[:mid]
    end
  end
  i
end

# one = [2,3,4]
# two = [0, 3, 1, 0]
# three = [0, 1, 2, 4, 1, 0]
# four = [40,48,61,75,100,99,98,39,30,10]

# p bsearch_manual(one)
# # binding.pry
# p bsearch_manual(two)
# p bsearch_manual(three)
# p bsearch_manual(four)
def two_sum(nums, target)
    hash = {}
    nums.each_with_index do |n, i|
        hash[i] = n
    end
    # p hash
    hash.sort_by { |k, v| v}
    index = hash.keys.reverse
    index.each do |x|
      first = hash[x]
      if hash.delete_if{|k, v| k == x }.has_value?(target - first)
        return [x, hash.key(target - first)] if hash.key(target - first) != x
        # else
        #   second_match = hash.select{|key, value| key != x && value == first }
        #   return [x, second_match.key(target - first)]
        # end
      end
      index.drop(1)
    end
end

one = [0,4,3,0]
two = [3,3]

p two_sum(one, 3)
p two_sum(two, 6)
p two_sum([1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1], 11)
p two_sum([3,2,4],6)
