const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")

let [n, m] = input.shift().split(" ").map(Number) // Number 필수 이것땜에 틀림
let arr = [];

for(let w = 0; w < n; w++){
  arr.push(input.shift().trim().split(" ").map(Number))
}
let k = Number(input.shift())
// console.log(n, m, arr, k)
for(let s = 0; s < k; s++){
  let [i, j, x, y] = input.shift().trim().split(" ").map(Number)
  let sum = 0;
  for(let a = i-1; a < x; a++){
    for(let b = j-1; b < y; b++){
      sum += arr[a][b]
    }
  }
  console.log(sum)
}