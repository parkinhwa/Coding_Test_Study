const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let n = Number(input.shift());
//console.log(input)
input.sort((a, b) => parseFloat(a) - parseFloat(b));
//console.log(input)
console.log(input.join("\n"))