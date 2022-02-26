def longest_common_prefix(strs)
  return '' if strs.first.empty? || strs.empty?
  return strs.first if strs.count == 1

  common = []
  check = true
  # iterate every letter
  200.times do |one|
    letter = strs[0][one]
    return common.join if letter.nil?
    # p one
    p letter
    # iterate every word
    (strs.count - 1).times do |two|
      p two
      return common.join unless check && strs[two + 1][one] == letter
    end
    common << letter
    p common
  end
end

# p longest_common_prefix(["flower","flow","flight"])
# p longest_common_prefix([""])
# p longest_common_prefix(["flower", "flower", "flower", "flower"])


p ["flower","flow","flight", "flow" , "hellasdfsadf"].minmax
