/*
 * @param {string} s
 * @return {number}
 */

// Time - 116 ms, faster than 76.26% of JavaScript online submissions for First Unique Character in a String.
// Space - 46.4 MB, less than 28.73% of JavaScript online submissions for First Unique Character in a String.
var firstUniqChar = function (s) {
  // code here
  let count = {}
  let index = {}
  for (let i = 0; i < s.length; i++) {
    if (!count[s[i]]) {
      count[s[i]] = 1
      index[s[i]] = i
    } else {
      count[s[i]] += 1
      delete index[s[i]]
    }
  }
  console.log("index", index)
  console.log("count:", count)
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
