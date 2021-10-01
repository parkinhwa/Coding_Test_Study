const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

let [a, b] = input
a = Number(a.split('').reverse().join(''))
b = Number(b.split('').reverse().join(''))

console.log(Math.max(a, b));
