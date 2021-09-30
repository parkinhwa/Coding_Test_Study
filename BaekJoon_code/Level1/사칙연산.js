const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(val=>+val);
const [a, b] = input
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(parseInt(a/b))
console.log(a%b)