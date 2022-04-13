"use strict"

process.stdin.resume()
process.stdin.setEncoding("utf-8")

let inputString = ""
let currentLine = 0

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin
})

process.stdin.on("end", function () {
  inputString = inputString.split("\n")

  main()
})

function readLine() {
  return inputString[currentLine++]
}

/*
 * Complete the 'calcMissing' function below.
 *
 * The function accepts STRING_ARRAY readings as parameter.
 */

function calcMissing(readings) {
  // Write your code here
  let levels = []
  let levels_readings = []
  let readingsArray = []
  levels = String(readings).split("\n")
  levels_readings = levels[0].split(",")
  readingsArray = levels_readings.map(r => r.split("\t"))
  // console.log(readingsArray);
  let first = Date.parse(readingsArray[0][0])
  let data = []
  for (let i = 0; i < readingsArray.length; i++) {
    if (i == 0) {
      data.push([0, Number.parseFloat(readingsArray[i][1])])
    } else {
      data.push([(Date.parse(readingsArray[i][0]) - first) / 1000 / 60 / 60 / 24, Number.parseFloat(readingsArray[i][1])])
    }
  }

  let difference = (Date.parse(readingsArray[1][0]) - Date.parse(readingsArray[0][0])) / 1000 / 60 / 60 / 24
  let result = 0.0
  for (let i = 0; i < data.length; i++) {
    if (i == 0 && isNaN(data[i][1])) {
      result = data[i + 1][1] + ((data[i + 1][1] - data[i + 2][1]) / (data[i + 1][0] - data[i + 2][0])) * (data[i][0] - data[i + 1][0])
      data[i][1] = result
      console.log(result)
    }
    if (isNaN(data[i][1])) {
      if (i + 1 < data.length && !isNaN(data[i + 1][1]) && !isNaN(data[i - 1][1])) {
        result = data[i - 1][1] + ((data[i + 1][1] - data[i - 1][1]) / (data[i + 1][0] - data[i - 1][0])) * (data[i][0] - data[i - 1][0])
        data[i][1] = result
        console.log(result)
      } else if (i + 2 < data.length && !isNaN(data[i + 2][1]) && !isNaN(data[i - 1][1])) {
        result = data[i - 1][1] + ((data[i + 2][1] - data[i - 1][1]) / (data[i + 2][0] - data[i - 1][0])) * (data[i][0] - data[i - 1][0])
        data[i][1] = result
        console.log(result)
      } else if (i + 3 < data.length && !isNaN(data[i + 3][1]) && !isNaN(data[i - 1][1])) {
        result = data[i - 1][1] + ((data[i + 3][1] - data[i - 1][1]) / (data[i + 3][0] - data[i - 1][0])) * (data[i][0] - data[i - 1][0])
        data[i][1] = result
        console.log(result)
      } else if (!isNaN(data[i - 2][1]) && !isNaN(data[i - 1][1])) {
        result = data[i - 1][1] + ((data[i - 2][1] - data[i - 1][1]) / (data[i - 2][0] - data[i - 1][0])) * (data[i][0] - data[i - 1][0])
        data[i][1] = result
        console.log(result)
      }
    }
  }
}

function main() {
  const readingsCount = parseInt(readLine().trim(), 10)

  let readings = []

  for (let i = 0; i < readingsCount; i++) {
    const readingsItem = readLine()
    readings.push(readingsItem)
  }

  calcMissing(readings)
}
