let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let pPAp = /pPAp/g;
let answer = input[1].match(pPAp);
console.log(answer.length);