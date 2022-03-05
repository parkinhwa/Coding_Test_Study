let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input.shift());

for(let i = 0; i < n; i++){
  let [a, b] = input.shift().split(" ").map(Number);
  let num = i+1;
  let sum = a+b;
  console.log("Case #"+num+": "+a+" + "+b+" = "+sum);
}