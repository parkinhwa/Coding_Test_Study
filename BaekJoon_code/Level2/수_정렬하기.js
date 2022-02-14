let input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);

input.pop();
let n = input.shift();
input.sort((a, b)=>a-b);

for(let i = 0; i < n; i++){
  console.log(input[i]);  
}