const fs = require('fs')
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(value => value);
let answer = 0;

for(let i = 0; i < input.length; i++){
  if(input[i] !== ''){
    answer++;
  }
}
console.log(answer)