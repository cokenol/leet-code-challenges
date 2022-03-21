// Time - 93 ms, faster than 77.23% of JavaScript online submissions for Valid Anagram.
// Space - 43.3 MB, less than 69.64% of JavaScript online submissions for Valid Anagram.

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1
    } else {
      obj[s[i]] += 1
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (obj[t[j]]) {
      obj[t[j]] -= 1
    } else {
      return false
    }
  }
  return true
}

const arr = [
  ["anagram", "nagaram"],
  ["cat", "car"]
]

arr.forEach(a => {
  console.log(a, isAnagram(...a))
})
