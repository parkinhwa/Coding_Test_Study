const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let n = input.shift();
let p = input.shift().split(" ").map(Number).sort((a, b)=>a-b);
let sum = 0;
for(let i = 0; i < n; i++){
  for(let j = 0; j <= i; j++){
    //console.log(sum, p[j])
    sum += p[j]
  }
}
console.log(sum)