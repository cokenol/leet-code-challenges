# @param {String} s
# @param {String} t
# @return {Character}
def find_the_difference(s, t)
  bef = s.chars.tally
  aft = t.chars.tally
  p bef
  p aft
  # (t.chars - s.chars).first
  aft.keys.each do |k|
    return k if bef[k] != aft[k]
  end
end

p find_the_difference("abcd", "abcde")
p find_the_difference("a","aa")
