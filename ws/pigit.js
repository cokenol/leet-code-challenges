function pigit(s) {
  result = s.match(/(\w+\'*\w*)/g)
  result.forEach(w => {
    s = s.replace(w, w.slice(1) + w[0] + "ay")
  })
  return s
}

// console.log(pigit("Pig latin is cool"))
console.log(pigit("Pig latin is cool"))
console.log(pigit("Pig's latin is cool !"))
