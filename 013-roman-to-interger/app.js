/*
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  romanValues = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }
  let int = 0
  while (s) {
    firstTwo = s.slice(0, 2)
    const arrobj = new Set()
    Object.keys(romanValues).map(key => arrobj.add(key))
    if (arrobj.has(firstTwo)) {
      location = firstTwo
      s = s.slice(2)
    } else {
      location = s[0]
      s = s.slice(1)
    // }
    // console.log("Check location")
    // console.log(location)
    // console.log(romanValues[location])
    int += romanValues[location]
  }
  return int
}
