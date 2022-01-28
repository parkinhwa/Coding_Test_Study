const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let L = input.shift();
let r = 1;
let M = 1234567891;
let str = input[0];
let answer = 0;

for(let i = 0; i < L; i++){
  let rawnum = str[i].charCodeAt(0)-96;
  answer += rawnum*r;
  r *= 31;
  r %= M;
  answer = answer%M;
}

console.log(answer);
