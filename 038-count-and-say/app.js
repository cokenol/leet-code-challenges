/*
 * @param {number} n
 * @return {string}
 */
// Time - 65 ms, faster than 95.06% of JavaScript online submissions for Count and Say.
// Space - 45MB MB, less than 17.00% of JavaScript online submissions for Count and Say.
var countAndSay = function (n) {
  let arr = {
    1: "1",
    2: "11",
    3: "21"
  }
  if (arr[n]) {
    return arr[n]
  }
  for (let j = 3; j <= n; j++) {
    word = arr[j - 1]
    count = 1
    res = ""
    for (let i = 0; i < word.length - 1; i++) {
      if (word[i] !== word[i + 1]) {
        res += `${count}${word[i]}`
        count = 1
        if (i === word.length - 2) res += `${count}${word[i + 1]}`
      } else {
        count += 1
        if (i === word.length - 2) res += `${count}${word[i]}`
      }
      arr[j] = res
    }
    // console.log(j, arr)
  }
  return arr[n]
}

// const cas = countAndSay()

console.log("\n=================\n", countAndSay(10))
