var hammingWeight = function (n) {
  let count = 0
  let i = 32
  while (i--) {
    count += n & 1
    n = n >> 1
  }
  return count
}
