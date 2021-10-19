const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")

let [n, m] = input.shift()
let arr = [];

for(let w = 0; w < n; w++){
  arr.push(input.shift().split(" ").map(Number))
}
let k = Number(input.shift())
let sum = 0;

// console.log(n, m, arr, k)
for(let s = 0; s < k; s++){
  let [i, j, x, y] = input.shift().split(" ").map(Number)
  for(let a = i-1; a < x; a++){
    for(let b = j-1; b < y; b++){
      sum += arr[a][b]
    }
  }
  console.log(sum)
  sum = 0;
}