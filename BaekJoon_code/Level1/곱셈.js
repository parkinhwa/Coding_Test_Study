const [a, b] = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let a2 = Number(a)
let b2 = b.split("").map(Number);

console.log(a2*b2[2])
console.log(a2*b2[1])
console.log(a2*b2[0])
console.log(a2*Number(b))