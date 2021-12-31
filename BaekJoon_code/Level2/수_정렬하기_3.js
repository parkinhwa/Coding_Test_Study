const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);

let n = input.shift();
//console.log(input)
input.sort((a, b) => a-b);
let answer = '';

for(let i = 1; i < input.length; i++){
  answer += input[i]+"\n"
}
console.log(answer)