string1 = "23482949+3434-23324*5453$24323"
string = "23482949+3434-23324*5453$243232*3243234$234324"
badstring = "234829&49+3434-23324*5453$24323"

function calculate(string) {
  if (string.search(/[^.0-9\+\-\*\$]+/) != -1) {
    return "BadRequest"
  }
  while (string.includes("$")) {
    divide = string.match(/(\d+\.*\d*)\$(\d+\.*\d*)/)
    res = Number.parseFloat(divide[1]) / Number.parseFloat(divide[2])
    string = string.replace(divide[0], res)
  }
  while (string.includes("*")) {
    times = string.match(/(\d+\.*\d*)\*(\d+\.*\d*)/)
    res = Number.parseFloat(times[1]) * Number.parseFloat(times[2])
    string = string.replace(times[0], res)
  }
  while (string.search(/(\d+\.*\d*)\-(\d+\.*\d*)/) != -1) {
    subtract = string.match(/(\d+\.*\d*)\-(\d+\.*\d*)/)
    res = Number.parseFloat(subtract[1]) - Number.parseFloat(subtract[2])
    string = string.replace(subtract[0], res)
  }
  while (string.includes("+")) {
    add = string.match(/(\-*\d+\.*\d*)\+(\-*\d+\.*\d*)/)
    console.log(add)
    res = Number.parseFloat(add[1]) + Number.parseFloat(add[2])
    string = string.replace(add[0], res)
  }
  return string
}

console.log(calculate(string))
console.log(calculate(badstring))
console.log(calculate("10-9p"))
