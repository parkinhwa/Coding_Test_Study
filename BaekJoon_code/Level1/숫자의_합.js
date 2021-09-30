const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input.shift());
const num = input[0].split("");
let answer = 0;
for(let i = 0; i < n; i++){
  let a = parseInt(num[i]);
  answer += a;
}
console.log(answer);

