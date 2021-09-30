const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number)
const [a, b] = input

console.log(a*b);