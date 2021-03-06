# @param {String} s
# @return {Boolean}
require 'pry-byebug'

def is_valid(s)
  return false if s.length < 2 || s.length.odd?
  p "check validity on #{s}"
  parentheses = ['(', '[', '{', ')', ']', '}']
  s = s.chars.select{ |ltr| parentheses.include?(ltr)}.join
  h = {
    '(' => ')',
    '[' => ']',
    '{' => '}'
  }
  5000.times do
      s = s.gsub(/\[\]|\(\)|\{\}/, "")
  end
  s = s.gsub(/\[\]|\(\)|\{\}/, "").chars
  p s
  return true if s.count == 0

  until s.count == 0
    # If Closing tag second char
    return false if h.keys.include?(s[0])
    if h.values.include?(s[1])
      # p "closing tag second char"
      if h[s[0]] == s[1]
        s = s.drop(2)
      else
        return false
      end
      # p s.count
      # p s
    # If Opening tag on second char
    elsif h.keys.include?(s[1])
      # p "opening tag second char"
      # Check on last char
      if h.values.include?(s[-1])
        # p "checking on last char"
        # binding.pry
        if h[s[0]] == s[-1]
          s = s.drop(1)
          s.pop
        else
          return false
        end
      else
        return false
      end
    end
  return true if s.count == 0
  end
end




# h = s.chars.tally
# h["("] == h[")"] && h["["] == h["]"] && h["{"] == h["}"]

# p is_valid("(word)")
p is_valid("()[]{}")
# p is_valid("(]")
p is_valid("{[]}")
# p is_valid("([)]")
# p is_valid("(([]){})")
