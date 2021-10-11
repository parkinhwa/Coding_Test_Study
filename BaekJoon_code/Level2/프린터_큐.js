const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")

let n = input.shift()

for(let i = 0; i < n; i++){
  let [n, m] = input.shift().split(" ").map(Number)
  let queue = input.shift().trim().split(" ").sort((a, b) => b-a)
  let max = Math.max(...queue)
  console.log(n, m, queue)
}