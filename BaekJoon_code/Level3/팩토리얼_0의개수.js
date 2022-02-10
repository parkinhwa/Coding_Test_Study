let input = require('fs').readFileSync('/dev/stdin').toString();

let n = Number(input);
let pro = 1;
let answer = 0;

while(input >= 5){
  //console.log(input)
  answer += parseInt(input/5);
  input /= 5;
  // console.log(answer, input)
}
console.log(answer);