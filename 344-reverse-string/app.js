function reverseString(str) {
  if (str.length === 1) return str
  for (let i = 0; i < (str.length - 1) / 2; i++) {
    let temp = str[i]
    str[i] = str[str.length - 1 - i]
    str[str.length - 1 - i] = temp
  }
  return str
}
console.log(reverseString("hello".split("")))
console.log(reverseString("veryFuckingBigArrayWeyBrudder".split("")))
