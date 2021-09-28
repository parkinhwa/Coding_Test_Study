const fs = require('fs')
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function solution(input){
  let sum = 0;
  let answer = 0;
  for(let i of input){
    sum += i**2;
  }
  answer = sum%10;
  return answer;
}

console.log(solution(input))