const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);
let n = input.shift();
input.pop();
input.sort((a, b) => a-b);
let answer = '';
for(let i = 0; i < n; i++){
  answer += input[i]+"\n";
}
console.log(answer)