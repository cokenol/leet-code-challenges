/*
 * @param {string} s
 * @return {number}
 */

// Time - 92 ms, faster than 95.27% of JavaScript online submissions for First Unique Character in a String.
// Space - 45.9 MB, less than 37.77% of JavaScript online submissions for First Unique Character in a String.
var firstUniqChar = function (s) {
  // code here
  let index = {}
  let set = new Set()
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      delete index[s[i]]
    } else {
      set.add(s[i])
      index[s[i]] = i
    }
  }
  console.log("index", index)
  let indexes = Object.values(index)
  if (indexes.length === 0) {
    return -1
  } else {
    return indexes[0]
  }
}
const arr = ["leetcode", "loveleetcode", "aabb"]

arr.forEach(s => {
  console.log(firstUniqChar(s))
})
/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
1 <= s.length <= 105
s consists of only lowercase English letters.
Accepted
1,002,382
Submissions
1,763,886
*/
