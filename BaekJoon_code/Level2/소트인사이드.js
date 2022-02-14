let input = require('fs').readFileSync('/dev/stdin').toString().split("").map(Number);
input.pop();
input.sort((a, b)=>b-a);
console.log(input.join(""));