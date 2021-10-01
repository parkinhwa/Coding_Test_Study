const input = require('fs').readFileSync("/dev/stdin").toString();
let a = Number(input)
let answer = "";

for(let i = a; i > 0; i--){
  answer += i + "\n"
}

console.log(answer)
