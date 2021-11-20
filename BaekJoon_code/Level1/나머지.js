const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);
console.log((a+b)%c)
console.log(((a%c) + (b%c))%c)
console.log((a*b)%c)
console.log(((a%c)*(b%c))%c)