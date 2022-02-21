let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input.shift());
let answer = "";
for(let i = 0; i < n; i++){
  let [a, b] = input[i].split(" ").map(Number);
  answer += a+b+"\n"
}
console.log(answer);