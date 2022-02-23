def is_valid(s)
  puts "\nRunning for #{s}"
  stack = []
  count = 0
  pairs = {
    ')' => '(',
    '}' => '{',
    ']' => '['
  }
  s.each_char do |char|
    last_ele = stack[-1]
    if !stack.empty? && pairs[char] == stack[-1]
      stack.pop
    else
      stack << char
    end
    count += 1
    puts "##{count} Char= #{char} Last_ele= #{last_ele} Stack= #{stack}"
  end
  stack.empty?
end




# h = s.chars.tally
# h["("] == h[")"] && h["["] == h["]"] && h["{"] == h["}"]

# p is_valid("(word)")
# p is_valid("()[]{}")
# p is_valid("(]")
p is_valid("{[]}")
p is_valid("([)]")
p is_valid("(([]){})")
