class MyQueue {
  constructor() {
    this.queue = []
  }

  push(value) {
    return this.queue.push(value)
  }

  pop() {
    return this.queue.shift()
  }
  peek() {
    return this.queue[0]
  }
  empty() {
    return this.queue.length === 0 ? true : false
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue()
console.log(obj)
obj.push(1)
console.log(obj)
var param_2 = obj.pop()
console.log(param_2)
// var param_3 = obj.peek()
var param_4 = obj.empty()
console.log(param_4)
