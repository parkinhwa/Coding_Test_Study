let input = require('fs').readFileSync("/dev/stdin").toString().trim().split("");

let dial = ['', '', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
let sum = input.length;
for(let i = 0; i < input.length; i++){
  for(let j = 2; j < dial.length; j++){
    if(dial[j].indexOf(input[i]) != -1) {
      sum += j;
    }
  }
}
console.log(sum);