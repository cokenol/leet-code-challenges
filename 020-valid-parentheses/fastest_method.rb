def is_valid(s)
  puts "\nRunning for #{s}"
  stack = []
  count = 0
  s.each_char do |char|
    last_ele = stack[-1]
    if (char == ')' && last_ele == '(') ||
       (char == '}' && last_ele == '{') ||
       (char == ']' && last_ele == '[')
      stack.pop
    else
      stack << char
    end
    puts "##{count} Char= #{char} Last_ele= #{last_ele} Stack= #{stack}"
    count += 1
  end
  return true if stack.empty?

  false
end




# h = s.chars.tally
# h["("] == h[")"] && h["["] == h["]"] && h["{"] == h["}"]

# p is_valid("(word)")
# p is_valid("()[]{}")
# p is_valid("(]")
# p is_valid("{[]}")
# p is_valid("([)]")
p is_valid("(([]){})")
