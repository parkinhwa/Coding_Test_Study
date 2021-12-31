let input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);
let answer = 1;
let num = 1;
while(input > num) {
  num = num + (6*answer);
  answer++;
}
console.log(answer);