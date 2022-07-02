let input = require('fs').readFileSync('/dev/stdin').toString();

const n = parseInt(input);
let result = 2;

for(let i = 2; i <= n; i++) {
  result *= 3;
}

console.log(result);